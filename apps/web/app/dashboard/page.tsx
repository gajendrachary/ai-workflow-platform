const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { label: 'Workflows', href: '/dashboard/workflows', icon: '⚙️' },
  { label: 'Hiring', href: '/dashboard/hiring', icon: '👥' },
  { label: 'Projects', href: '/dashboard/projects', icon: '📋' },
  { label: 'Billing', href: '/dashboard/billing', icon: '💰' },
  { label: 'Approvals', href: '/dashboard/approvals', icon: '✅' },
  { label: 'Documents', href: '/dashboard/documents', icon: '📄' },
];

const stats = [
  { label: 'Active Workflows', value: '0', color: '#6366f1' },
  { label: 'Open Approvals', value: '0', color: '#f59e0b' },
  { label: 'Active Projects', value: '0', color: '#10b981' },
  { label: 'Candidates', value: '0', color: '#3b82f6' },
  { label: 'Unpaid Invoices', value: '0', color: '#ef4444' },
  { label: 'Documents', value: '0', color: '#8b5cf6' },
];

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          background: '#1e1e2e',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0',
          flexShrink: 0,
        }}
      >
        <div style={{ padding: '0 24px 32px' }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#a5b4fc', margin: 0 }}>
            AI Workflow
          </h1>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '4px 0 0' }}>Platform</p>
        </div>

        <nav style={{ flex: 1 }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '10px 24px',
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: 14,
                borderLeft: item.href === '/dashboard' ? '3px solid #6366f1' : '3px solid transparent',
                background: item.href === '/dashboard' ? 'rgba(99,102,241,0.1)' : 'transparent',
                transition: 'background 0.15s',
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div style={{ padding: '24px', borderTop: '1px solid #2d2d3d' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#6366f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                fontWeight: 700,
                color: '#fff',
              }}
            >
              G
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#f9fafb' }}>Gajendrachary</p>
              <p style={{ margin: 0, fontSize: 11, color: '#9ca3af' }}>Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#111827' }}>Dashboard</h2>
          <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: 14 }}>
            Welcome back. Here is an overview of your platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 20,
            marginBottom: 40,
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: '20px 24px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                borderTop: `4px solid ${stat.color}`,
              }}
            >
              <p style={{ margin: '0 0 8px', fontSize: 13, color: '#6b7280', fontWeight: 500 }}>
                {stat.label}
              </p>
              <p style={{ margin: 0, fontSize: 28, fontWeight: 800, color: stat.color }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', marginBottom: 32 }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#111827' }}>Quick Actions</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { label: 'New Workflow', color: '#6366f1' },
              { label: 'Add Candidate', color: '#3b82f6' },
              { label: 'Create Project', color: '#10b981' },
              { label: 'New Invoice', color: '#f59e0b' },
              { label: 'Upload Document', color: '#8b5cf6' },
            ].map((action) => (
              <button
                key={action.label}
                style={{
                  padding: '10px 20px',
                  borderRadius: 8,
                  border: 'none',
                  background: action.color,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity Placeholder */}
        <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700, color: '#111827' }}>Recent Activity</h3>
          <p style={{ color: '#9ca3af', fontSize: 14, margin: 0 }}>
            No recent activity yet. Start by creating a workflow or adding a candidate.
          </p>
        </div>
      </main>
    </div>
  );
}
