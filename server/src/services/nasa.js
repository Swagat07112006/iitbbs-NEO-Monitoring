import axios from 'axios';
import { ValidationError } from '../errors/appError.js';
import { getCached, setCache } from '../lib/redis.js';

const NASA_BASE_URL = 'https://api.nasa.gov/neo/rest/v1';
const CACHE_TTL = 60 * 60; // 1 hour — orbital data rarely changes

const getApiKey = () => {
  const key = process.env.NASA_API_KEY;
  if (!key) {
    throw new ValidationError('NASA_API_KEY is not configured');
  }
  return key;
};

/**
 * Retry wrapper with exponential backoff.
 */
const withRetry = async (fn, { retries = 3, baseDelay = 1000 } = {}) => {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      const isRetryable = ['ETIMEDOUT', 'ECONNABORTED', 'ECONNRESET', 'ENOTFOUND', 'EAI_AGAIN'].includes(err.code)
        || err.response?.status === 429
        || err.response?.status >= 500;

      if (!isRetryable || attempt === retries) throw err;

      const delay = baseDelay * Math.pow(2, attempt);
      console.log(`Retry ${attempt + 1}/${retries} after ${delay}ms (${err.code || err.response?.status})`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
};

const fetchFeed = async ({ start_date, end_date }) => {
  const cacheKey = `neo:feed:${start_date}:${end_date}`;
  const cached = await getCached(cacheKey);
  if (cached) {
    console.log(`Redis cache hit → ${cacheKey}`);
    return cached;
  }

  const apiKey = getApiKey();
  try {
    const data = await withRetry(async () => {
      const res = await axios.get(`${NASA_BASE_URL}/feed`, {
        params: { api_key: apiKey, start_date, end_date },
        timeout: 60000,
      });
      return res.data;
    });
    await setCache(cacheKey, data, CACHE_TTL);
    console.log(`Redis cache set → ${cacheKey}`);
    return data;
  } catch (err) {
    console.error('NASA Feed API error:', {
      status: err.response?.status,
      data: err.response?.data,
      message: err.message,
      code: err.code,
    });
    throw err;
  }
};

const fetchLookup = async (id) => {
  const cacheKey = `neo:lookup:${id}`;
  const cached = await getCached(cacheKey);
  if (cached) {
    console.log(`Redis cache hit → ${cacheKey}`);
    return cached;
  }

  const apiKey = getApiKey();
  try {
    const data = await withRetry(async () => {
      const res = await axios.get(`${NASA_BASE_URL}/neo/${id}`, {
        params: { api_key: apiKey },
        timeout: 60000,
      });
      return res.data;
    });
    await setCache(cacheKey, data, CACHE_TTL);
    console.log(`Redis cache set → ${cacheKey}`);
    return data;
  } catch (err) {
    console.error('NASA Lookup API error:', {
      status: err.response?.status,
      data: err.response?.data,
      message: err.message,
      code: err.code,
    });
    throw err;
  }
};

export {
  fetchFeed,
  fetchLookup,
};
