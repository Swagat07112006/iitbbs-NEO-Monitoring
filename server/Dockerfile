# ---- Build Stage ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---- Production Stage ----
FROM node:22-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=build /app/node_modules ./node_modules
COPY package.json ./
COPY src ./src/

ENV NODE_ENV=production
EXPOSE 5000
USER appuser
CMD ["node", "src/index.js"]
