import React from 'react';
import { House } from '../../types/house';
import { HouseInfoRow } from './HouseInfoRow';

interface HouseInfoProps {
  house: House;
}

export const HouseInfo: React.FC<HouseInfoProps> = ({ house }) => (
  <div>
    <span className="block text-xl font-semibold text-primary mb-2">{house.price}€ / noche</span>
    <p className="mb-2 text-gray-700">{house.description}</p>
    <HouseInfoRow label="Dirección:" value={house.address} />
    <HouseInfoRow label="Ubicación:" value={house.location} />
    <HouseInfoRow label="Habitaciones:" value={house.rooms} />
    <HouseInfoRow label="Camas:" value={house.beds} />
    <HouseInfoRow label="Baños:" value={house.baths} />
  </div>
);
