const approvals = [
  { id: 1, title: 'Q4 Marketing Budget', requestedBy: 'Anita Singh', type: 'Budget', amount: '₹5,00,000', priority: 'High', submittedDate: '2 hours ago', status: 'Pending' },
  { id: 2, title: 'Work From Home Policy Update', requestedBy: 'Rajan Patel', type: 'Policy', amount: null, priority: 'Medium', submittedDate: '1 day ago', status: 'Pending' },
  { id: 3, title: 'Software License Renewal', requestedBy: 'Deepa Kumar', type: 'Purchase', amount: '₹1,20,000', priority: 'High', submittedDate: '2 days ago', status: 'Approved' },
  { id: 4, title: 'Team Offsite Event', requestedBy: 'Vikram Nair', type: 'Event', amount: '₹75,000', priority: 'Low', submittedDate: '3 days ago', status: 'Rejected' },
  { id: 5, title: 'New Hire Equipment', requestedBy: 'Meera Joshi', type: 'Purchase', amount: '₹85,000', priority: 'Medium', submittedDate: '4 days ago', status: 'Pending' },
];

export default function ApprovalsPage() {
  const pending = approvals.filter(a => a.status === 'Pending').length;
  const approved = approvals.filter(a => a.status === 'Approved').length;
  const rejected = approvals.filter(a => a.status === 'Rejected').length;

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>Approvals</h1>
        <p style={{ color: '#6b7280', fontSize: 14, margin: '4px 0 0' }}>Review and manage approval requests</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Pending Review', value: pending, color: '#f59e0b', bg: '#fef3c7' },
          { label: 'Approved', value: approved, color: '#10b981', bg: '#d1fae5' },
          { label: 'Rejected', value: rejected, color: '#ef4444', bg: '#fee2e2' },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              borderLeft: `4px solid ${s.color}`,
            }}
          >
            <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 4px' }}>{s.label}</p>
            <p style={{ fontSize: 32, fontWeight: 700, color: '#111827', margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Approvals List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {approvals.map((approval) => {
          const statusColors: Record<string, { bg: string; text: string }> = {
            Pending: { bg: '#fef3c7', text: '#92400e' },
            Approved: { bg: '#d1fae5', text: '#065f46' },
            Rejected: { bg: '#fee2e2', text: '#991b1b' },
          };
          const priorityColors: Record<string, string> = {
            High: '#ef4444',
            Medium: '#f59e0b',
            Low: '#10b981',
          };
          const sc = statusColors[approval.status] || { bg: '#f3f4f6', text: '#374151' };
          return (
            <div
              key={approval.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 20,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                border: '1px solid #f3f4f6',
              }}
            >
              {/* Priority indicator */}
              <div
                style={{
                  width: 4,
                  height: 48,
                  borderRadius: 2,
                  background: priorityColors[approval.priority] || '#6b7280',
                  flexShrink: 0,
                }}
              />

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0 }}>{approval.title}</h3>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      background: '#f3f4f6',
                      color: '#6b7280',
                    }}
                  >
                    {approval.type}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>
                  Requested by {approval.requestedBy} &bull; {approval.submittedDate}
                  {approval.amount && ` • ${approval.amount}`}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    background: sc.bg,
                    color: sc.text,
                  }}
                >
                  {approval.status}
                </span>
                {approval.status === 'Pending' && (
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      style={{
                        padding: '8px 16px',
                        background: '#d1fae5',
                        color: '#065f46',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Approve
                    </button>
                    <button
                      style={{
                        padding: '8px 16px',
                        background: '#fee2e2',
                        color: '#991b1b',
                        border: 'none',
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
