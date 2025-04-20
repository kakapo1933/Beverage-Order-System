# Beverage Order System

A comprehensive system for ordering and managing beverages, with separate applications for customers and merchants, built with modern web technologies.

<p style="text-align: center;">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Version 0.1.0">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License MIT">
  <img src="https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen" alt="Node >=16.0.0">
  <img src="https://img.shields.io/badge/pnpm-%3E%3D7.0.0-brightgreen" alt="PNPM >=7.0.0">
</p>

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Testing](#-testing)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Project Overview

The Beverage Order System is a comprehensive platform designed to streamline the process of ordering and managing beverages. It consists of:

- **Client Application**: A Progressive Web App (PWA) for customers to browse menus, place orders, and track delivery status
- **Merchant Application**: A web application for businesses to manage orders, inventory, and customer interactions
- **API**: A robust backend service that handles data storage, business logic, and real-time updates via WebSockets

## ✨ Features

### Client Application
- Browse beverage menus with detailed information
- Place and customize orders
- Real-time order tracking
- Offline functionality with PWA capabilities
- Secure payment processing
- Order history and favorites

### Merchant Application
- Dashboard with real-time order notifications
- Inventory management
- Order processing workflow
- Customer management
- Analytics and reporting
- Staff management

### API
- RESTful endpoints for data operations
- Real-time updates via WebSockets
- Authentication and authorization
- Data validation and error handling
- Comprehensive logging and monitoring

## 🏗️ Architecture

The project follows a monorepo architecture using pnpm workspaces, which allows for:

- **Code sharing**: Common utilities, types, and UI components are shared across applications
- **Independent deployment**: Each application can be built and deployed separately
- **Consistent development experience**: Common configuration for linting, formatting, and testing

The system uses a microservices-inspired approach with:
- Separate frontend applications for different user types
- A unified backend API
- Real-time communication via WebSockets
- Containerized deployment with Docker

## 💻 Technology Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend build tool
- **TypeScript**: Typed superset of JavaScript
- **Progressive Web App (PWA)**: For offline functionality and mobile installation

### Backend
- **NestJS**: Progressive Node.js framework for building server-side applications
- **RESTful API**: For standard HTTP communication
- **WebSockets**: For real-time updates and notifications

### Database
- **PostgreSQL**: Open-source relational database
- **Prisma ORM**: Next-generation ORM for Node.js and TypeScript

### Package Management
- **pnpm**: Fast, disk space efficient package manager with built-in monorepo support

### Development Tools
- **ESLint**: For code linting
- **Prettier**: For code formatting
- **Jest**: For testing

### Infrastructure & Deployment
- **Docker**: For containerization and consistent environments
- **Nginx**: Web server for serving static assets and routing
- **GitHub**: For version control and collaboration
- **AWS**: Cloud hosting platform for deployment (recommended)
- **CI/CD pipeline**: For automated testing and deployment

## 📁 Project Structure

The project follows a monorepo structure with the following organization:

```
beverage-order-system/
│
├── apps/                      # Application packages
│   ├── client/                # Customer-facing application
│   ├── merchant/              # Business-facing application
│   └── api/                   # NestJS Backend
│
├── packages/                  # Shared libraries and utilities
│   ├── types/                 # Shared TypeScript types
│   ├── ui/                    # Shared UI components
│   └── utils/                 # Shared utilities
│
├── docker/                    # Docker configuration
│   ├── docker-compose.yml     # Local development setup
│   ├── api.Dockerfile         # API service Dockerfile
│   ├── client.Dockerfile      # Client application Dockerfile
│   ├── merchant.Dockerfile    # Merchant application Dockerfile
│   └── nginx.conf             # Nginx configuration
│
└── docs/                      # Project documentation
```

## 🏁 Getting Started

### Prerequisites

- **Node.js** (v16 or later)
- **pnpm** (v7 or later)
- **Docker** and **Docker Compose** (for containerized development)
- **PostgreSQL** (if running locally without Docker)

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

## 🛠️ Development

### Running Locally

Start the development servers:

```bash
# Start the API
pnpm dev:api

# Start the client application
pnpm dev:client

# Start the merchant application
pnpm dev:merchant
```

### Running with Docker

For a complete development environment with all services:

```bash
cd docker && docker compose up -d
```

This will start the following services:

- **PostgreSQL** database at `localhost:5432`
- **API** service at `localhost:4000`
- **Client** application at `localhost:3000`
- **Merchant** application at `localhost:3001`

To stop the services:

```bash
cd docker && docker compose down
```

### Code Quality Tools

The project includes several tools to maintain code quality:

```bash
# Format code
pnpm format

# Lint code
pnpm lint

# Check formatting
pnpm format:check

# Check linting
pnpm lint:check
```

## 🧪 Testing

Run tests across all packages:

```bash
pnpm test
```

## 📦 Building for Production

```bash
# Build all applications
pnpm -r build

# Or build individual applications
pnpm build:api
pnpm build:client
pnpm build:merchant
```

## 🚢 Deployment

The project is designed to be deployed using Docker containers. The `docker` directory contains all necessary configuration files:

- `api.Dockerfile`: Builds the API service
- `client.Dockerfile`: Builds the client application
- `merchant.Dockerfile`: Builds the merchant application
- `nginx.conf`: Configures Nginx for routing and serving static assets

For production deployment, you can use:

```bash
cd docker && docker compose -f docker-compose.yml up -d
```

## 📚 API Documentation

API documentation is available at `/api/docs` when the API is running. This documentation is generated using Swagger/OpenAPI and provides:

- Endpoint descriptions
- Request/response schemas
- Authentication requirements
- Example requests

## 👥 Contributing

1. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure they follow the project's coding standards:
   ```bash
   pnpm lint
   pnpm format
   pnpm test
   ```

3. Commit your changes with a descriptive message:
   ```bash
   git commit -m "feat(scope): description of changes"
   ```

4. Push your branch and submit a pull request:
   ```bash
   git push origin feature/your-feature-name
   ```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.