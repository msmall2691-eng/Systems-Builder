FROM node:20-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package*.json ./
RUN npm ci

FROM deps AS build
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5000

COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist

EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://localhost:5000/api/health || exit 1
CMD ["node", "dist/index.cjs"]
