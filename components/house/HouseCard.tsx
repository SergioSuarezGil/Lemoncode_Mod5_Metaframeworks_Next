import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { House } from '../../types/house';

interface Props {
  house: House;
}

export const HouseCard: React.FC<Props> = ({ house }) => (
  <div className="house-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
    <Link href={`/houses/${house.id}`} className="flex-1 flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={house.image}
          alt={house.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2">{house.name}</h2>
          <p className="text-sm text-gray-600 mb-1">{house.address}</p>
        </div>
        <span className="text-primary font-semibold text-base">{house.price}€ / noche</span>
      </div>
    </Link>
  </div>
);
