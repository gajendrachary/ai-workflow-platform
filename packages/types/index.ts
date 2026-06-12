// Shared types for the AI Workflow Platform

export type ID = string;

export interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

export interface Organization extends BaseEntity {
  name: string;
  slug: string;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  role: UserRole;
  organizationId: ID;
}

export type UserRole = 'admin' | 'manager' | 'member' | 'viewer';

export interface WorkflowDefinition extends BaseEntity {
  name: string;
  description: string;
  steps: WorkflowStep[];
  organizationId: ID;
}

export interface WorkflowStep {
  id: ID;
  name: string;
  type: WorkflowStepType;
  assigneeRole?: UserRole;
  order: number;
}

export type WorkflowStepType = 'task' | 'approval' | 'notification' | 'ai_action';

export interface WorkflowInstance extends BaseEntity {
  definitionId: ID;
  status: WorkflowStatus;
  currentStepId: ID;
  organizationId: ID;
  createdBy: ID;
}

export type WorkflowStatus = 'draft' | 'active' | 'completed' | 'cancelled';

export interface ApprovalRequest extends BaseEntity {
  workflowInstanceId: ID;
  stepId: ID;
  requestedBy: ID;
  assignedTo: ID;
  status: ApprovalStatus;
  comment?: string;
}

export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface Project extends BaseEntity {
  name: string;
  description: string;
  status: ProjectStatus;
  organizationId: ID;
  managerId: ID;
}

export type ProjectStatus = 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';

export interface Candidate extends BaseEntity {
  name: string;
  email: string;
  role: string;
  status: CandidateStatus;
  organizationId: ID;
}

export type CandidateStatus = 'applied' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';

export interface Invoice extends BaseEntity {
  projectId: ID;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  dueDate: string;
  organizationId: ID;
}

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
