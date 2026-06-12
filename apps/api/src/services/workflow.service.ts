// Workflow Engine Service
// Handles workflow instance creation, step transitions, and status management

export type WorkflowStatus = 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
export type StepType = 'TASK' | 'APPROVAL' | 'NOTIFICATION' | 'AI_ACTION';

export interface WorkflowStep {
  id: string;
  name: string;
  type: StepType;
  order: number;
  assigneeRole?: string;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description?: string;
  steps: WorkflowStep[];
  organizationId: string;
}

export interface WorkflowInstance {
  id: string;
  definitionId: string;
  status: WorkflowStatus;
  currentStepId?: string;
  organizationId: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StepTransitionResult {
  success: boolean;
  instance: WorkflowInstance;
  message: string;
  nextStep?: WorkflowStep;
}

export class WorkflowService {
  /**
   * Start a new workflow instance from a definition.
   */
  async startWorkflow(
    definitionId: string,
    organizationId: string,
    createdBy: string
  ): Promise<WorkflowInstance> {
    // TODO: fetch definition from DB via Prisma
    // const definition = await prisma.workflowDefinition.findUnique({
    //   where: { id: definitionId },
    //   include: { steps: { orderBy: { order: 'asc' } } },
    // });

    // const firstStep = definition.steps[0];

    // TODO: create instance in DB
    // const instance = await prisma.workflowInstance.create({
    //   data: {
    //     definitionId,
    //     status: 'ACTIVE',
    //     currentStepId: firstStep.id,
    //     organizationId,
    //     createdBy,
    //   },
    // });

    // Placeholder response
    const instance: WorkflowInstance = {
      id: `wf_${Date.now()}`,
      definitionId,
      status: 'ACTIVE',
      currentStepId: 'step_1',
      organizationId,
      createdBy,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await this.logActivity({
      action: 'WORKFLOW_STARTED',
      entity: 'WorkflowInstance',
      entityId: instance.id,
      performedBy: createdBy,
      workflowInstanceId: instance.id,
    });

    return instance;
  }

  /**
   * Advance a workflow instance to the next step.
   */
  async advanceStep(
    instanceId: string,
    performedBy: string,
    comment?: string
  ): Promise<StepTransitionResult> {
    // TODO: fetch instance + definition + steps from DB
    // const instance = await prisma.workflowInstance.findUnique({ ... });
    // const currentStep = definition.steps.find(s => s.id === instance.currentStepId);
    // const nextStep = definition.steps.find(s => s.order === currentStep.order + 1);

    // TODO: update instance currentStepId or mark complete
    // if (!nextStep) {
    //   await prisma.workflowInstance.update({ where: { id: instanceId }, data: { status: 'COMPLETED' } });
    // } else {
    //   await prisma.workflowInstance.update({ where: { id: instanceId }, data: { currentStepId: nextStep.id } });
    // }

    await this.logActivity({
      action: 'STEP_ADVANCED',
      entity: 'WorkflowInstance',
      entityId: instanceId,
      performedBy,
      workflowInstanceId: instanceId,
      metadata: { comment },
    });

    // Placeholder
    return {
      success: true,
      instance: {
        id: instanceId,
        definitionId: 'def_placeholder',
        status: 'ACTIVE',
        currentStepId: 'step_2',
        organizationId: 'org_placeholder',
        createdBy: performedBy,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      message: 'Step advanced successfully',
    };
  }

  /**
   * Cancel a workflow instance.
   */
  async cancelWorkflow(
    instanceId: string,
    performedBy: string,
    reason?: string
  ): Promise<WorkflowInstance> {
    // TODO: update instance in DB
    // await prisma.workflowInstance.update({
    //   where: { id: instanceId },
    //   data: { status: 'CANCELLED' },
    // });

    await this.logActivity({
      action: 'WORKFLOW_CANCELLED',
      entity: 'WorkflowInstance',
      entityId: instanceId,
      performedBy,
      workflowInstanceId: instanceId,
      metadata: { reason },
    });

    return {
      id: instanceId,
      definitionId: 'def_placeholder',
      status: 'CANCELLED',
      organizationId: 'org_placeholder',
      createdBy: performedBy,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  /**
   * Log an activity entry for audit trail.
   */
  private async logActivity(entry: {
    action: string;
    entity: string;
    entityId: string;
    performedBy: string;
    workflowInstanceId?: string;
    metadata?: Record<string, unknown>;
  }): Promise<void> {
    // TODO: save to ActivityLog via Prisma
    // await prisma.activityLog.create({ data: { ...entry } });
    console.log('[ActivityLog]', JSON.stringify(entry));
  }
}

export const workflowService = new WorkflowService();
