# Use Node.js LTS as the base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-workspace.yaml
COPY package.json pnpm-workspace.yaml ./

# Copy package.json files for all workspaces
COPY apps/merchant/package.json ./apps/merchant/
COPY packages/types/package.json ./packages/types/
COPY packages/ui/package.json ./packages/ui/
COPY packages/utils/package.json ./packages/utils/

# Install dependencies
RUN pnpm install

# Development stage
FROM base AS development

# Copy source code
COPY . .

# Build shared packages first
RUN pnpm --filter "@beverage-order-system/ui" build && \
    pnpm --filter "@beverage-order-system/types" build && \
    pnpm --filter "@beverage-order-system/utils" build

# Expose port
EXPOSE 3001

# Start the merchant in development mode
CMD ["pnpm", "dev:merchant"]

# Build stage
FROM base AS build

# Copy source code
COPY . .

# Build the application
RUN pnpm build:merchant

# Production stage with Nginx
FROM nginx:alpine AS production

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built application from build stage
COPY --from=build /app/apps/merchant/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]