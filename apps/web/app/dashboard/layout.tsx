'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
  { label: 'Workflows', href: '/dashboard/workflows', icon: '⚙️' },
  { label: 'Hiring', href: '/dashboard/hiring', icon: '👥' },
  { label: 'Projects', href: '/dashboard/projects', icon: '📁' },
  { label: 'Billing', href: '/dashboard/billing', icon: '💰' },
  { label: 'Approvals', href: '/dashboard/approvals', icon: '✅' },
  { label: 'Documents', href: '/dashboard/documents', icon: '📄' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          zIndex: 100,
        }}
      >
        <div style={{ padding: '0 20px 24px', borderBottom: '1px solid #2a2a3e' }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: '#6366f1', margin: 0 }}>AI Workflow</h1>
          <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>Platform</p>
        </div>
        <nav style={{ flex: 1, padding: '16px 12px' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#9ca3af',
                  background: isActive ? '#6366f1' : 'transparent',
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  marginBottom: 4,
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ padding: '16px 20px', borderTop: '1px solid #2a2a3e' }}>
          <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>v1.0.0</p>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, marginLeft: 240, background: '#f8fafc', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
