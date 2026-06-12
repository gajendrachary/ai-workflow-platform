const documents = [
  { id: 1, name: 'Employee Handbook 2024', category: 'HR', type: 'PDF', size: '2.4 MB', uploadedBy: 'Anita Singh', uploadedDate: '1 week ago', tags: ['policy', 'hr'] },
  { id: 2, name: 'Q3 Financial Report', category: 'Finance', type: 'XLSX', size: '1.1 MB', uploadedBy: 'Rajan Patel', uploadedDate: '3 days ago', tags: ['finance', 'report'] },
  { id: 3, name: 'Project Proposal - RetailCo', category: 'Projects', type: 'DOCX', size: '850 KB', uploadedBy: 'Deepa Kumar', uploadedDate: '2 days ago', tags: ['proposal', 'client'] },
  { id: 4, name: 'NDA Template', category: 'Legal', type: 'PDF', size: '340 KB', uploadedBy: 'Vikram Nair', uploadedDate: '1 month ago', tags: ['legal', 'template'] },
  { id: 5, name: 'Service Agreement - TechCorp', category: 'Legal', type: 'PDF', size: '1.8 MB', uploadedBy: 'Meera Joshi', uploadedDate: '5 days ago', tags: ['legal', 'contract'] },
  { id: 6, name: 'Brand Guidelines', category: 'Marketing', type: 'PDF', size: '5.2 MB', uploadedBy: 'Arjun Sharma', uploadedDate: '2 weeks ago', tags: ['brand', 'design'] },
];

const categories = ['All', 'HR', 'Finance', 'Projects', 'Legal', 'Marketing'];

const typeColors: Record<string, { bg: string; text: string }> = {
  PDF: { bg: '#fee2e2', text: '#991b1b' },
  XLSX: { bg: '#d1fae5', text: '#065f46' },
  DOCX: { bg: '#dbeafe', text: '#1e40af' },
};

export default function DocumentsPage() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>Documents</h1>
          <p style={{ color: '#6b7280', fontSize: 14, margin: '4px 0 0' }}>Manage and organize company documents</p>
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
          + Upload Document
        </button>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {categories.map((cat, i) => (
          <button
            key={cat}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              background: i === 0 ? '#6366f1' : '#fff',
              color: i === 0 ? '#fff' : '#374151',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Total Documents', value: documents.length, color: '#6366f1' },
          { label: 'PDFs', value: documents.filter(d => d.type === 'PDF').length, color: '#ef4444' },
          { label: 'Spreadsheets', value: documents.filter(d => d.type === 'XLSX').length, color: '#10b981' },
          { label: 'Word Docs', value: documents.filter(d => d.type === 'DOCX').length, color: '#3b82f6' },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: '16px 20px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              borderLeft: `4px solid ${s.color}`,
            }}
          >
            <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 4px' }}>{s.label}</p>
            <p style={{ fontSize: 26, fontWeight: 700, color: '#111827', margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Document Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
        {documents.map((doc) => {
          const tc = typeColors[doc.type] || { bg: '#f3f4f6', text: '#374151' };
          return (
            <div
              key={doc.id}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 20,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                border: '1px solid #f3f4f6',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: tc.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 700,
                    color: tc.text,
                    flexShrink: 0,
                  }}
                >
                  {doc.type}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: '#111827', margin: '0 0 4px', lineHeight: 1.3 }}>{doc.name}</h3>
                  <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{doc.category} &bull; {doc.size}</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontSize: 11,
                      background: '#f3f4f6',
                      color: '#6b7280',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>By {doc.uploadedBy} &bull; {doc.uploadedDate}</p>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button style={{ padding: '4px 10px', background: '#ede9fe', color: '#6366f1', border: 'none', borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>View</button>
                  <button style={{ padding: '4px 10px', background: '#f3f4f6', color: '#374151', border: 'none', borderRadius: 5, fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>Download</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
