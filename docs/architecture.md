# Architecture Overview

## Principles

- Modular domains with clear boundaries
- Shared platform capabilities extracted into packages or core services
- Workflow engine separated from business modules
- AI integrations isolated behind a service boundary
- Auditability for critical actions

## High-Level Components

### apps/web
User-facing frontend for operations teams, managers, and admins.

### apps/api
Primary backend API entry point. Handles authentication, routing, orchestration, and domain service access.

### services/workflow-engine
Responsible for workflow definitions, step transitions, assignments, conditions, and execution history.

### services/ai
Responsible for model integration, prompt templates, summarization, drafting, extraction, and safe action support.

### packages/types
Shared contracts between frontend and backend.

### packages/config
Shared config, environment parsing, constants, and feature flags.

## Domain Modules

Planned domains:

- Hiring
- Projects
- Billing
- Approvals
- Documents
- Notifications

## Data Considerations

Core entities:

- Organization
- User
- Role
- WorkflowDefinition
- WorkflowInstance
- WorkflowStep
- ApprovalRequest
- Candidate
- Project
- Invoice
- Document
- ActivityLog

## Cross-Cutting Concerns

- Authentication and authorization
- Audit trail
- Notifications
- Search
- Reporting
- AI usage logging
