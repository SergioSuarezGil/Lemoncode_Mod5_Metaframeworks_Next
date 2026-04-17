import React from 'react';

interface HouseInfoRowProps {
  label: string;
  value: React.ReactNode;
}

export const HouseInfoRow: React.FC<HouseInfoRowProps> = ({ label, value }) => (
  <p className="mb-1">
    <strong>{label}</strong> {value}
  </p>
);
