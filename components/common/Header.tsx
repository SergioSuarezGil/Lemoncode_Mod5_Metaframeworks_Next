import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex items-center gap-4">
      <Link href="/" className="flex items-center gap-2">
        <span className="border-2 border-primary rounded-lg px-2 py-1 font-bold text-lg">CR</span>
        <span className="text-2xl font-extrabold tracking-tight">Casas Rurales</span>
      </Link>
    </div>
  </header>
);
