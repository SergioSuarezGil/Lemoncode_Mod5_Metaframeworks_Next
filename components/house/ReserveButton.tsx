import React from 'react';

interface ReserveButtonProps {
  onClick: () => void;
}

export const ReserveButton: React.FC<ReserveButtonProps> = ({ onClick }) => (
  <button
    className="mt-4 bg-black text-white py-2 px-6 rounded-lg font-semibold shadow hover:bg-gray-800 transition"
    onClick={onClick}
  >
    Reservar
  </button>
);
