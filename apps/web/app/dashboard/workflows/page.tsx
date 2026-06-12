const workflows = [
  { id: 1, name: 'Employee Onboarding', status: 'Active', steps: 5, lastRun: '2 hours ago', color: '#6366f1' },
  { id: 2, name: 'Invoice Approval', status: 'Active', steps: 3, lastRun: '1 day ago', color: '#10b981' },
  { id: 3, name: 'Leave Request', status: 'Draft', steps: 4, lastRun: 'Never', color: '#f59e0b' },
  { id: 4, name: 'Expense Reimbursement', status: 'Active', steps: 6, lastRun: '3 days ago', color: '#3b82f6' },
  { id: 5, name: 'Contract Review', status: 'Paused', steps: 8, lastRun: '1 week ago', color: '#ef4444' },
];

export default function WorkflowsPage() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>Workflows</h1>
          <p style={{ color: '#6b7280', fontSize: 14, margin: '4px 0 0' }}>Automate your business processes</p>
        </div>
        <button
          style={{
            padding: '10px 20px',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          + New Workflow
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Total Workflows', value: '5', color: '#6366f1' },
          { label: 'Active', value: '3', color: '#10b981' },
          { label: 'Paused / Draft', value: '2', color: '#f59e0b' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              borderLeft: `4px solid ${stat.color}`,
            }}
          >
            <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 4px' }}>{stat.label}</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Workflow List */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#111827', margin: 0 }}>All Workflows</h2>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb' }}>
              {['Name', 'Status', 'Steps', 'Last Run', 'Actions'].map((col) => (
                <th
                  key={col}
                  style={{
                    padding: '12px 24px',
                    textAlign: 'left',
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow) => (
              <tr key={workflow.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: workflow.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontWeight: 500, color: '#111827', fontSize: 14 }}>{workflow.name}</span>
                  </div>
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                      background:
                        workflow.status === 'Active'
                          ? '#d1fae5'
                          : workflow.status === 'Draft'
                          ? '#fef3c7'
                          : '#fee2e2',
                      color:
                        workflow.status === 'Active'
                          ? '#065f46'
                          : workflow.status === 'Draft'
                          ? '#92400e'
                          : '#991b1b',
                    }}
                  >
                    {workflow.status}
                  </span>
                </td>
                <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: 14 }}>{workflow.steps} steps</td>
                <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: 14 }}>{workflow.lastRun}</td>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      style={{
                        padding: '6px 12px',
                        background: '#ede9fe',
                        color: '#6366f1',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        padding: '6px 12px',
                        background: '#f3f4f6',
                        color: '#374151',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: 12,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Run
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
