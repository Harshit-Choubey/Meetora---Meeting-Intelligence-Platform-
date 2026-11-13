import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/providers/QueryProvider';
import { ToastProvider } from '@/providers/ToastContext';
import { PlayerSyncProvider } from '@/providers/PlayerSyncContext';

export const metadata: Metadata = {
  title: 'Meetora — AI-powered Meeting Intelligence Platform',
  description: 'Make every meeting matter. Turn conversations into searchable knowledge, actionable insights, and meaningful decisions.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Meetora — AI-powered Meeting Intelligence Platform',
    description: 'Make every meeting matter. Turn conversations into searchable knowledge, actionable insights, and meaningful decisions.',
    siteName: 'Meetora',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-[#F7F7FA] min-h-screen">
        <QueryProvider>
          <ToastProvider>
            <PlayerSyncProvider>
              {children}
            </PlayerSyncProvider>
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
