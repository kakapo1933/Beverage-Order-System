# Beverage Order System

A comprehensive system for ordering beverages, with separate applications for customers and merchants.

## Project Overview

This project is a monorepo containing:

- **Client Application**: A web application for customers to browse menus and place orders
- **Merchant Application**: A web application for businesses to manage orders and inventory
- **API**: A backend service that handles data storage, business logic, and real-time updates

## Technology Stack

- **Frontend**: React, Tailwind CSS, Vite, TypeScript
- **Backend**: NestJS, PostgreSQL, Prisma ORM
- **Shared**: Monorepo with pnpm workspaces
- **Deployment**: Docker, Nginx

## Project Structure

```
beverage-order-system/
│
├── apps/                      # Application packages
│   ├── client/                # Customer-facing application
│   ├── merchant/              # Business-facing application
│   └── api/                   # Backend API
│
├── packages/                  # Shared packages
│   ├── types/                 # Shared TypeScript types
│   ├── ui/                    # Shared UI components
│   └── utils/                 # Shared utility functions
│
├── docker/                    # Docker configuration
│   ├── docker-compose.yml     # Docker Compose configuration
│   ├── Dockerfile.api         # Dockerfile for API
│   ├── Dockerfile.client      # Dockerfile for client app
│   ├── Dockerfile.merchant    # Dockerfile for merchant app
│   └── nginx.conf             # Nginx configuration
│
└── docs/                      # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (v7 or later)
- Docker and Docker Compose (for containerized development)
- PostgreSQL (if running locally)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/beverage-order-system.git
   cd beverage-order-system
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `apps/api` directory based on `.env.example`

4. Generate Prisma client:
   ```bash
   cd apps/api && npx prisma generate && cd ../..
   ```

### Development

#### Running locally

Start the development servers:

```bash
# Start the API
pnpm dev:api

# Start the client application
pnpm dev:client

# Start the merchant application
pnpm dev:merchant
```

#### Running with Docker

```bash
cd docker && docker compose up -d
```

This will start the following services:
- PostgreSQL database at `localhost:5432`
- API service at `localhost:4000`
- Client application at `localhost:3000`
- Merchant application at `localhost:3001`

To stop the services:

```bash
cd docker && docker compose down
```

### Building for Production

```bash
# Build all applications
pnpm build

# Or build individual applications
pnpm build:api
pnpm build:client
pnpm build:merchant
```

## API Documentation

API documentation is available at `/api/docs` when the API is running.

## Contributing

1. Create a new branch for your feature or bugfix
2. Make your changes
3. Submit a pull request

## Recent Fixes

The following issues were fixed:

1. Created missing module files for the API:
   - `apps/api/src/auth/auth.module.ts`
   - `apps/api/src/menu/menu.module.ts`
   - `apps/api/src/orders/orders.module.ts`
   - `apps/api/src/payments/payments.module.ts`
   - `apps/api/src/notifications/notifications.module.ts`

2. Fixed TypeScript error in `apps/api/src/prisma/prisma.service.ts` by adding an index signature to the PrismaService class.

3. Updated Docker Compose command to use the newer format: `docker compose` instead of `docker-compose`.

4. Fixed container accessibility issue:
   - Updated client and merchant Vite configurations to bind to all interfaces (`host: '0.0.0.0'`)
   - Updated proxy configurations to use Docker service names instead of localhost
   - Modified docker-compose.yml to explicitly use the development target for client and merchant containers

## License

This project is licensed under the MIT License - see the LICENSE file for details.