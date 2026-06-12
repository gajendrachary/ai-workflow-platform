import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Workflow Platform',
  description:
    'Enterprise workflow platform for hiring, projects, billing, approvals, and documents.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', background: '#f5f6fa' }}>
        {children}
      </body>
    </html>
  );
}
