import Link from 'next/link';
import './global.css';
import NavBar from '@/components/NavBar';

export default function RootLatyout({ children }) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col px-4 py-3 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-xs border-t py-3">
          Game data and images courtesy of{' '}
          <a className="text-orange-800 hover:underline" href="https://rawg.io" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
