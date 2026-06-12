import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import QueryProvider from '@/components/QueryProvider/QueryProvider';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'NoteHub application',
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}