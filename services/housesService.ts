import { House } from '../types/house';
import { mapHouse } from './houseMapper';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getHouses = async (): Promise<House[]> => {
  const res = await fetch(`${API_BASE_URL}/api/houses`);
  if (!res.ok) throw new Error('Error al obtener casas rurales');
  const data = await res.json();
  return Array.isArray(data) ? data.map(mapHouse) : [];
};

export const getHouseById = async (id: string): Promise<House> => {
  const res = await fetch(`${API_BASE_URL}/api/houses/${id}`);
  if (!res.ok) throw new Error('Error al obtener la casa rural');
  const data = await res.json();
  return mapHouse(data);
};
