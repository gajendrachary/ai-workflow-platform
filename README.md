# AI Workflow Platform

Enterprise workflow platform for hiring, projects, billing, approvals, documents, and AI-assisted business operations.

## Overview

AI Workflow Platform is a modular business operations system designed for companies that want to run internal workflows from a single platform. It brings together hiring, project management, billing, approvals, document handling, and AI-assisted actions so teams can reduce manual coordination and keep business data in one place.

The long-term goal is to provide a flexible workflow foundation that can support multiple business functions without forcing teams to stitch together many disconnected tools. The short-term goal is to build a focused MVP that solves a few high-value workflows end to end.

## Problem Statement

Growing teams often manage operations across separate tools for recruitment, task tracking, billing, approvals, file handling, and communication. This creates duplicated work, poor visibility, inconsistent approvals, and delays in execution.

This platform aims to solve that by:

- Centralizing business workflows in one system.
- Standardizing approval and handoff processes.
- Connecting operational modules through shared data.
- Adding AI assistance for drafting, summarization, classification, and decision support.
- Making workflows configurable so the platform can adapt to different business processes.

## Core Modules

The platform is planned as a modular system with shared authentication, role-based access, and workflow orchestration.

### Initial modules

- Hiring management
- Project and task operations
- Billing and invoice workflows
- Approval management
- Document storage and processing
- AI assistant services

### Shared platform capabilities

- Organization and user management
- Role-based permissions
- Workflow definitions and execution
- Activity logs and audit trails
- Notifications and reminders
- Search and reporting

## MVP Scope

The recommended first version should stay narrow and prove the architecture with a working end-to-end flow.

### Suggested MVP workflows

1. Candidate hiring workflow
   - Create candidate
   - Assign interview stages
   - Collect interviewer feedback
   - Route approval decision
   - Generate offer/rejection communication

2. Project to billing workflow
   - Create project
   - Assign team members
   - Log work or milestones
   - Request manager approval
   - Generate invoice draft

### MVP objectives

- Build a reusable workflow engine.
- Prove modular boundaries between domains.
- Validate role-based approvals.
- Add one or two practical AI-assisted actions.
- Create a foundation that can be extended into a full SaaS platform.

## Proposed Architecture

```text
apps/
  web/                 Frontend application
  api/                 API layer / backend gateway

packages/
  config/              Shared config, env loading, constants
  types/               Shared TypeScript types and contracts

services/
  workflow-engine/     Workflow orchestration logic
  ai/                  AI prompts, tools, model integrations

infra/
  docker/              Local development containers

.github/
  workflows/           CI workflows

docs/
  vision.md            Product vision and scope
  architecture.md      Technical architecture and module boundaries
```

## Suggested Tech Stack

### Frontend

- Next.js or React with TypeScript
- Tailwind CSS for UI styling
- TanStack Query for server state
- React Hook Form for forms

### Backend

- Node.js with TypeScript
- NestJS or Express/Fastify for APIs
- Prisma ORM
- PostgreSQL as primary database
- Redis for queues, caching, and background jobs

### AI layer

- Provider abstraction for OpenAI, Anthropic, or Gemini
- Prompt templates and tool wrappers in a dedicated AI service
- Audit logging for AI-generated actions

### Infrastructure

- Docker Compose for local development
- GitHub Actions for CI
- Cloud deployment on Google Cloud, AWS, or similar
- Object storage for documents and attachments

## Getting Started

This repository is currently in the setup phase.

### Planned local setup

```bash
git clone https://github.com/gajendrachary/ai-workflow-platform.git
cd ai-workflow-platform
cp .env.example .env
# install dependencies
# start database and supporting services
# run web and api apps
```

## Environment Variables

Create a `.env` file using `.env.example`.

Expected variables include:

- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `AI_PROVIDER`
- `AI_API_KEY`
- `STORAGE_BUCKET`
- `APP_BASE_URL`

## Development Priorities

### Phase 1

- Finalize scope and architecture
- Scaffold monorepo structure
- Set up frontend and backend apps
- Add authentication and organization model
- Build the first workflow execution flow

### Phase 2

- Add hiring module
- Add project and billing workflow
- Add approval center
- Add audit logs and notifications
- Add AI-assisted summaries and drafting

### Phase 3

- Add reusable workflow builder
- Add reporting dashboards
- Add document templates and exports
- Add advanced automation rules
- Prepare multi-tenant SaaS deployment

## Contribution Guidelines

This repository is in active early-stage development. Contributions should follow a modular structure, clear naming, and strong separation between domain modules and shared platform code.

Basic expectations:

- Use feature branches.
- Keep commits small and focused.
- Document architectural changes in `docs/architecture.md`.
- Add tests for workflow logic and critical services.
- Avoid coupling business modules directly when shared abstractions belong in packages or core services.

## License

This project currently needs an explicit license before external collaboration. Until a license is added, all rights remain with the repository owner.

## Roadmap

- [ ] Replace placeholder repository files with working project scaffold
- [ ] Add monorepo tooling
- [ ] Add database schema and migrations
- [ ] Build authentication and organization setup
- [ ] Implement workflow engine MVP
- [ ] Implement hiring MVP workflow
- [ ] Implement project-to-billing MVP workflow
- [ ] Add AI assistant actions
- [ ] Add CI/CD and deployment pipeline
