const invoices = [
  { id: 'INV-001', client: 'RetailCo', amount: 45000, status: 'Paid', dueDate: 'Nov 15, 2024', issuedDate: 'Nov 1, 2024' },
  { id: 'INV-002', client: 'TechCorp', amount: 80000, status: 'Unpaid', dueDate: 'Dec 10, 2024', issuedDate: 'Nov 25, 2024' },
  { id: 'INV-003', client: 'StartupXYZ', amount: 30000, status: 'Paid', dueDate: 'Nov 20, 2024', issuedDate: 'Nov 5, 2024' },
  { id: 'INV-004', client: 'Enterprise Ltd', amount: 120000, status: 'Overdue', dueDate: 'Nov 5, 2024', issuedDate: 'Oct 20, 2024' },
  { id: 'INV-005', client: 'DataDriven Inc', amount: 25000, status: 'Draft', dueDate: 'Dec 20, 2024', issuedDate: 'Nov 28, 2024' },
];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
}

export default function BillingPage() {
  const totalRevenue = invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  const totalUnpaid = invoices.filter(i => i.status === 'Unpaid' || i.status === 'Overdue').reduce((sum, i) => sum + i.amount, 0);

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>Billing</h1>
          <p style={{ color: '#6b7280', fontSize: 14, margin: '4px 0 0' }}>Manage invoices and payments</p>
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
          + New Invoice
        </button>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        {[
          { label: 'Total Invoices', value: invoices.length.toString(), color: '#6366f1' },
          { label: 'Revenue Collected', value: formatCurrency(totalRevenue), color: '#10b981' },
          { label: 'Outstanding', value: formatCurrency(totalUnpaid), color: '#ef4444' },
          { label: 'Overdue', value: invoices.filter(i => i.status === 'Overdue').length.toString(), color: '#f59e0b' },
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
            <p style={{ fontSize: 22, fontWeight: 700, color: '#111827', margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Invoice Table */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #f3f4f6' }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#111827', margin: 0 }}>All Invoices</h2>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb' }}>
              {['Invoice #', 'Client', 'Amount', 'Issued', 'Due Date', 'Status', 'Actions'].map((col) => (
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
            {invoices.map((invoice) => {
              const statusStyle: Record<string, { bg: string; text: string }> = {
                Paid: { bg: '#d1fae5', text: '#065f46' },
                Unpaid: { bg: '#dbeafe', text: '#1e40af' },
                Overdue: { bg: '#fee2e2', text: '#991b1b' },
                Draft: { bg: '#f3f4f6', text: '#374151' },
              };
              const ss = statusStyle[invoice.status] || { bg: '#f3f4f6', text: '#374151' };
              return (
                <tr key={invoice.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: '#6366f1', fontSize: 14 }}>{invoice.id}</td>
                  <td style={{ padding: '16px 24px', color: '#111827', fontSize: 14 }}>{invoice.client}</td>
                  <td style={{ padding: '16px 24px', fontWeight: 600, color: '#111827', fontSize: 14 }}>{formatCurrency(invoice.amount)}</td>
                  <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: 14 }}>{invoice.issuedDate}</td>
                  <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: 14 }}>{invoice.dueDate}</td>
                  <td style={{ padding: '16px 24px' }}>
                    <span
                      style={{
                        padding: '4px 10px',
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                        background: ss.bg,
                        color: ss.text,
                      }}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button style={{ padding: '6px 12px', background: '#ede9fe', color: '#6366f1', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>View</button>
                      {invoice.status !== 'Paid' && (
                        <button style={{ padding: '6px 12px', background: '#d1fae5', color: '#065f46', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Mark Paid</button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
