import './global.css';
import NavBar from '@/components/NavBar';
import { exo2, orbitron } from './font';

export const metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
  description: 'Only the best indie games, reviewed for you',
};

export default function RootLatyout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-3 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-slate-500 text-xs border-t py-3">
          Game data and images courtesy of{' '}
          <a className="text-orange-800 hover:underline" href="https://rawg.io" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
