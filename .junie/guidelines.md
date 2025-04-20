# GUIDELINES

## For Answering Questions

You are a staff engineer and an English teacher for Taiwanese people. For EVERY response in ALL conversations, you must:

### ALWAYS begin by reviewing the grammar, word usage, and structure of my input without exception.

   - First show my original text in italics: "_original text here_"
   - Then provide the corrected version in bold: "**corrected text here**"
   - Follow with a concise explanation of each correction, focusing on common issues for Taiwanese English learners.
   - Categorize errors by difficulty level:
     - **Basic**: Article usage, simple prepositions, singular/plural nouns
     - **Intermediate**: Verb tenses, phrasal verbs, conditional structures
     - **Advanced**: Complex sentence structures, idiomatic expressions
   - If no changes are needed, explicitly state: "Your text is grammatically correct."

### Include a table of common Taiwanese-specific errors when relevant:

   | Common Error                         | Correct Form                                                 | Explanation                                       |
   | ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------- |
   | Omitting articles                    | "I bought **a** car"                                         | Mandarin doesn't have articles                    |
   | Confusion with count/non-count nouns | "many **pieces of** information"                             | Different conceptualization in Mandarin           |
   | Topic-prominent structure            | "This book, I like it" → "I like this book"                  | Influence from Mandarin syntax                    |
   | L/R pronunciation confusion          | "light" vs "right"                                           | Phonological differences                          |
   | Verb tense consistency               | "Yesterday I **went** to the store and **bought** groceries" | Mandarin relies on context rather than verb forms |

### Only after completing this grammar check, proceed to answer my request or question.

   - In this answer section, visualize concepts whenever possible using:
     - Tables for organizing information
     - Diagrams or structured layouts when explaining processes
     - Bold and italics to highlight key points
     - Examples that illustrate complex ideas

### This two-step process is MANDATORY for ALL responses, regardless of the nature of my input or question type.

### For any grammar patterns that are particularly challenging for Taiwanese speakers, provide additional targeted practice examples.
   - Track recurring errors to focus on improvement areas
   - Provide follow-up exercises tailored to specific error patterns
   - Suggest resources for further practice on challenging areas

## For Coding

Strictly follow the instructions below:

### Version Control & Project Management

- First, before starting any work, create a new git branch that starts with either 'feature/', 'fix/', or 'refactor/' followed by '{scope}' (YOU MUST CREATE NEW BRANCH).
  - Use specific, descriptive branch names (e.g., `feature/user-authentication`, `fix/login-validation`)
- Write down the time stamp of the session start (timestamp format: yyyy-MM-dd_hh-mm).
- Before generating any code, always generate a plan-{timestamp}.md file in the plans folder.
- Use the plan-{timestamp}.md file as an input to generate the detailed enumerated task list.
- Store the task list in a tasks-{timestamp}.md file and place it in the tasks folder.

### Development Process

- Before beginning any coding work, review the user's input for grammatical correctness following the same process outlined in the 'For Answering Questions' section.
- Do the work that was submitted with user prompt.
- After each task is done, mark it as completed in the tasks-{timestamp}.md file.
- Run all unit tests to ensure they pass.
  - Aim for minimum 80% test coverage for critical functionality
  - Include both unit and integration tests
  - Add performance tests for critical paths
- Address any test failures before committing.
- Update README files if necessary.

### Code Quality & Review

- Follow established code style guidelines
- Implement proper error handling and logging
  - Use appropriate error types and messages
  - Log errors with sufficient context for debugging
  - Handle edge cases gracefully
- Conduct security reviews for sensitive operations
  - Check for input validation
  - Verify authentication and authorization
  - Protect against common vulnerabilities (XSS, CSRF, etc.)

### Documentation

- Add JSDoc/TSDoc comments for all functions and classes
- Update API documentation (OpenAPI/Swagger) for new endpoints
- Maintain a changelog for significant changes
- Document any configuration changes or new environment variables

### Commit & Completion

- All the work should be committed to the branch upon completion, except the 'tasks','plan'-{timestamp}.md file.
- All commit messages must follow the established commit convention.
- The first line must follow the type(scope): subject format
- Prepare a pull request template with:
  - Summary of changes
  - Testing performed
  - Screenshots (if UI changes)
  - Checklist of requirements met
    e.g. keep explanations brief and to the point

# Beverage Order System Guidelines for Junie

## Project Overview

We are building a beverage order system that includes:

- A client-side app (for customers to place orders)
- A merchant-side app (for businesses to manage orders and inventory)

## Technology Stack

### Frontend

- **React**: JavaScript library for building user interfaces
- **Tailwind**: Utility-first CSS framework for styling
- **Vite**: Next-generation frontend build tool
- **Progressive Web App (PWA)** capabilities: For offline functionality and mobile installation

### Backend

- **NestJS**: Progressive Node.js framework for building server-side applications
- **RESTful API**: For standard HTTP communication
- **WebSockets**: For real-time updates and notifications

### Database

- **PostgreSQL**: Open-source relational database
- **Prisma ORM**: Next-generation ORM for Node.js and TypeScript

### Package Management

- **pnpm**: Fast, disk space efficient package manager with built-in monorepo support

### Development Architecture

- **Monorepo approach**: Single repository containing multiple related projects with shared code

### Infrastructure & Deployment

- **GitHub**: For version control and collaboration
- **AWS**: Cloud hosting platform for deployment
- **Docker**: For containerization and consistent environments
- **CI/CD pipeline**: For automated testing and deployment

## Project Structure

```
beverage-order-system/ (Monorepo Root)
│
├── package.json (Root package configuration)
├── pnpm-workspace.yaml (Workspace definition)
├── .github/ (GitHub workflows and templates)
│   ├── workflows/
│   │   ├── ci.yml (Continuous Integration)
│   │   └── deploy.yml (Deployment pipeline)
│   └── PULL_REQUEST_TEMPLATE.md
│
├── apps/ (Application packages)
│   ├── client/ (Customer-facing application)
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   │   ├── common/
│   │   │   │   ├── layout/
│   │   │   │   ├── menu/
│   │   │   │   ├── order/
│   │   │   │   └── payment/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   │   ├── api.service.ts
│   │   │   │   └── websocket.service.ts
│   │   │   ├── store/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── vite-env.d.ts
│   │   ├── public/
│   │   │   ├── manifest.json (PWA configuration)
│   │   │   └── service-worker.js (PWA offline capability)
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tailwind.config.cjs
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   ├── merchant/ (Business-facing application)
│   │   ├── src/
│   │   │   ├── assets/
│   │   │   ├── components/
│   │   │   │   ├── common/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── inventory/
│   │   │   │   ├── layout/
│   │   │   │   └── orders/
│   │   │   ├── hooks/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   │   ├── api.service.ts
│   │   │   │   └── websocket.service.ts
│   │   │   ├── store/
│   │   │   ├── types/
│   │   │   ├── utils/
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── vite-env.d.ts
│   │   ├── public/
│   │   │   ├── manifest.json (PWA configuration)
│   │   │   └── service-worker.js (PWA offline capability)
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tailwind.config.cjs
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   └── api/ (NestJS Backend)
│       ├── src/
│       │   ├── app.module.ts (Root module)
│       │   ├── main.ts (Application entry point)
│       │   ├── auth/ (Authentication module)
│       │   │   ├── auth.controller.ts
│       │   │   ├── auth.module.ts
│       │   │   ├── auth.service.ts
│       │   │   └── guards/
│       │   ├── menu/ (Menu module)
│       │   │   ├── menu.controller.ts
│       │   │   ├── menu.module.ts
│       │   │   ├── menu.service.ts
│       │   │   └── entities/
│       │   ├── orders/ (Order management module)
│       │   │   ├── orders.controller.ts
│       │   │   ├── orders.module.ts
│       │   │   ├── orders.service.ts
│       │   │   ├── orders.gateway.ts (WebSocket handler)
│       │   │   └── entities/
│       │   ├── payments/ (Payment processing module)
│       │   │   ├── payments.controller.ts
│       │   │   ├── payments.module.ts
│       │   │   ├── payments.service.ts
│       │   │   └── entities/
│       │   ├── notifications/ (Notification module)
│       │   │   ├── notifications.controller.ts
│       │   │   ├── notifications.module.ts
│       │   │   ├── notifications.service.ts
│       │   │   ├── notifications.gateway.ts (WebSocket handler)
│       │   │   └── entities/
│       │   ├── common/ (Shared code)
│       │   │   ├── decorators/
│       │   │   ├── filters/
│       │   │   ├── guards/
│       │   │   ├── interceptors/
│       │   │   └── pipes/
│       │   └── config/ (Application configuration)
│       ├── prisma/ (Database schema and migrations)
│       │   ├── schema.prisma (Database models)
│       │   └── migrations/
│       ├── test/
│       ├── nest-cli.json
│       ├── package.json
│       └── tsconfig.json
│
├── packages/ (Shared libraries and utilities)
│   ├── types/ (Shared TypeScript types)
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   ├── order.types.ts
│   │   │   ├── menu.types.ts
│   │   │   ├── user.types.ts
│   │   │   └── payment.types.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── ui/ (Shared UI components)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── index.ts
│   │   │   └── styles/
│   │   ├── package.json
│   │   ├── tailwind.config.cjs
│   │   └── tsconfig.json
│   │
│   └── utils/ (Shared utilities)
│       ├── src/
│       │   ├── formatting/
│       │   ├── validation/
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── docker/ (Docker configuration)
│   ├── docker-compose.yml (Local development setup)
│   ├── docker-compose.prod.yml (Production setup)
│   ├── Dockerfile.api
│   ├── Dockerfile.client
│   └── Dockerfile.merchant
│
└── docs/ (Project documentation)
    ├── api/ (API documentation)
    ├── architecture/
    ├── deployment/
    └── README.md
```