import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function PatriciaTitle() {
  return (
    <span
      className={`gradient-text ${greatVibes.className} text-6xl md:text-7xl font-bold tracking-tight`}
      style={{
        display: 'inline-block',
        letterSpacing: '0.04em',
        lineHeight: 1.1,
        marginRight: '0.5rem',
      }}
    >
      Patricia
    </span>
  );
}