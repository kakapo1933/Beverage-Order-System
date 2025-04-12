# Use Node.js LTS as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-workspace.yaml
COPY package.json pnpm-workspace.yaml ./

# Copy package.json files for all workspaces
COPY apps/api/package.json ./apps/api/
COPY packages/types/package.json ./packages/types/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies
RUN pnpm install

# Development stage
FROM base AS development

# Copy source code
COPY . .

# Generate Prisma client
RUN cd apps/api && npx prisma generate

# Expose port
EXPOSE 4000

# Start the API in development mode
CMD ["pnpm", "dev:api"]

# Build stage
FROM base AS build

# Copy source code
COPY . .

# Generate Prisma client
RUN cd apps/api && npx prisma generate

# Build the application
RUN pnpm build:api

# Production stage
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-workspace.yaml
COPY package.json pnpm-workspace.yaml ./

# Copy package.json files for all workspaces
COPY apps/api/package.json ./apps/api/
COPY packages/types/package.json ./packages/types/
COPY packages/utils/package.json ./packages/utils/

# Install production dependencies only
RUN pnpm install --prod

# Copy built application from build stage
COPY --from=build /app/apps/api/dist ./apps/api/dist
COPY --from=build /app/apps/api/prisma ./apps/api/prisma

# Generate Prisma client
RUN cd apps/api && npx prisma generate

# Expose port
EXPOSE 4000

# Start the API in production mode
CMD ["node", "apps/api/dist/main.js"]