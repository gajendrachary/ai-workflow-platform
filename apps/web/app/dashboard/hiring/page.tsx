const candidates = [
  { id: 1, name: 'Arjun Sharma', role: 'Frontend Developer', stage: 'Technical Interview', appliedDate: '3 days ago', status: 'In Progress' },
  { id: 2, name: 'Priya Nair', role: 'Product Manager', stage: 'HR Round', appliedDate: '5 days ago', status: 'In Progress' },
  { id: 3, name: 'Rahul Verma', role: 'Backend Engineer', stage: 'Offer', appliedDate: '1 week ago', status: 'Shortlisted' },
  { id: 4, name: 'Sneha Iyer', role: 'UX Designer', stage: 'Screening', appliedDate: '1 day ago', status: 'New' },
  { id: 5, name: 'Karan Mehta', role: 'DevOps Engineer', stage: 'Rejected', appliedDate: '2 weeks ago', status: 'Rejected' },
];

const stages = ['Screening', 'Technical Interview', 'HR Round', 'Offer', 'Rejected'];

export default function HiringPage() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>Hiring</h1>
          <p style={{ color: '#6b7280', fontSize: 14, margin: '4px 0 0' }}>Manage candidates and recruitment pipeline</p>
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
          + Add Candidate
        </button>
      </div>

      {/* Pipeline Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 32 }}>
        {stages.map((stage, i) => {
          const colors = ['#6366f1', '#3b82f6', '#f59e0b', '#10b981', '#ef4444'];
          const count = candidates.filter((c) => c.stage === stage).length;
          return (
            <div
              key={stage}
              style={{
                background: '#fff',
                borderRadius: 10,
                padding: '14px 16px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                borderTop: `3px solid ${colors[i]}`,
                textAlign: 'center',
              }}
            >
              <p style={{ fontSize: 22, fontWeight: 700, color: '#111827', margin: '0 0 4px' }}>{count}</p>
              <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>{stage}</p>
            </div>
          );
        })}
      </div>

      {/* Candidate Table */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#111827', margin: 0 }}>All Candidates</h2>
          <span style={{ fontSize: 13, color: '#6b7280' }}>{candidates.length} total</span>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb' }}>
              {['Candidate', 'Role', 'Stage', 'Applied', 'Status', 'Actions'].map((col) => (
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
            {candidates.map((c) => (
              <tr key={c.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                <td style={{ padding: '16px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: '#ede9fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#6366f1',
                        flexShrink: 0,
                      }}
                    >
                      {c.name.charAt(0)}
                    </div>
                    <span style={{ fontWeight: 500, color: '#111827', fontSize: 14 }}>{c.name}</span>
                  </div>
                </td>
                <td style={{ padding: '16px 24px', color: '#374151', fontSize: 14 }}>{c.role}</td>
                <td style={{ padding: '16px 24px', color: '#374151', fontSize: 14 }}>{c.stage}</td>
                <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: 14 }}>{c.appliedDate}</td>
                <td style={{ padding: '16px 24px' }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: 20,
                      fontSize: 12,
                      fontWeight: 600,
                      background:
                        c.status === 'In Progress' ? '#dbeafe' : c.status === 'Shortlisted' ? '#d1fae5' : c.status === 'New' ? '#ede9fe' : '#fee2e2',
                      color:
                        c.status === 'In Progress' ? '#1e40af' : c.status === 'Shortlisted' ? '#065f46' : c.status === 'New' ? '#4f46e5' : '#991b1b',
                    }}
                  >
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '16px 24px' }}>
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
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
