const projects = [
  { id: 1, name: 'E-Commerce Platform Redesign', client: 'RetailCo', status: 'In Progress', progress: 65, dueDate: 'Dec 15, 2024', budget: '₹4,50,000', team: 4 },
  { id: 2, name: 'HR Management System', client: 'TechCorp', status: 'In Progress', progress: 30, dueDate: 'Jan 20, 2025', budget: '₹8,00,000', team: 6 },
  { id: 3, name: 'Mobile App Development', client: 'StartupXYZ', status: 'Completed', progress: 100, dueDate: 'Nov 30, 2024', budget: '₹3,00,000', team: 3 },
  { id: 4, name: 'Cloud Migration', client: 'Enterprise Ltd', status: 'Planning', progress: 10, dueDate: 'Feb 28, 2025', budget: '₹12,00,000', team: 5 },
  { id: 5, name: 'Analytics Dashboard', client: 'DataDriven Inc', status: 'On Hold', progress: 45, dueDate: 'Mar 10, 2025', budget: '₹2,50,000', team: 2 },
];

export default function ProjectsPage() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>Projects</h1>
          <p style={{ color: '#6b7280', fontSize: 14, margin: '4px 0 0' }}>Track and manage client projects</p>
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
          + New Project
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Total Projects', value: projects.length, color: '#6366f1' },
          { label: 'In Progress', value: projects.filter(p => p.status === 'In Progress').length, color: '#3b82f6' },
          { label: 'Completed', value: projects.filter(p => p.status === 'Completed').length, color: '#10b981' },
          { label: 'On Hold', value: projects.filter(p => p.status === 'On Hold').length, color: '#f59e0b' },
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
            <p style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Project Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
        {projects.map((project) => {
          const statusColors: Record<string, { bg: string; text: string }> = {
            'In Progress': { bg: '#dbeafe', text: '#1e40af' },
            Completed: { bg: '#d1fae5', text: '#065f46' },
            Planning: { bg: '#ede9fe', text: '#4f46e5' },
            'On Hold': { bg: '#fef3c7', text: '#92400e' },
          };
          const sc = statusColors[project.status] || { bg: '#f3f4f6', text: '#374151' };
          return (
            <div
              key={project.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                border: '1px solid #f3f4f6',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111827', margin: 0, flex: 1 }}>{project.name}</h3>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    background: sc.bg,
                    color: sc.text,
                    marginLeft: 8,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {project.status}
                </span>
              </div>
              <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 16px' }}>Client: {project.client}</p>

              {/* Progress Bar */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: '#6b7280' }}>Progress</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#111827' }}>{project.progress}%</span>
                </div>
                <div style={{ background: '#f3f4f6', borderRadius: 4, height: 6 }}>
                  <div
                    style={{
                      width: `${project.progress}%`,
                      height: '100%',
                      background: project.progress === 100 ? '#10b981' : '#6366f1',
                      borderRadius: 4,
                      transition: 'width 0.3s',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div>
                  <p style={{ fontSize: 11, color: '#9ca3af', margin: '0 0 2px' }}>Due Date</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#374151', margin: 0 }}>{project.dueDate}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9ca3af', margin: '0 0 2px' }}>Budget</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#374151', margin: 0 }}>{project.budget}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: '#9ca3af', margin: '0 0 2px' }}>Team Size</p>
                  <p style={{ fontSize: 13, fontWeight: 500, color: '#374151', margin: 0 }}>{project.team} members</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
