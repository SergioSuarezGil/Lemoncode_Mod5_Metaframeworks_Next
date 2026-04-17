import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Buscar por nombre o ubicación..."
      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
