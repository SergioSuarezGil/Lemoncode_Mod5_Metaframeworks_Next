import React, { useState } from 'react';
import { Header } from '../components/common/Header';
import { SearchBar } from '../components/common/SearchBar';
import { HouseCard } from '../components/house/HouseCard';
import { Feedback } from '../components/common/Feedback';
import { getHouses } from '../services/housesService';
import { GetStaticProps } from 'next';
import { House } from '../types/house';
import { normalize } from '../utils/normalize';

interface HomeProps {
  houses: House[];
}

const Home: React.FC<HomeProps> = ({ houses }) => {
  const [search, setSearch] = useState('');

  const filtered = houses.filter((house) => {
    const name = house.name || '';
    const location = house.location || '';
    const searchNorm = normalize(search.toLowerCase());
    return (
      normalize(name.toLowerCase()).includes(searchNorm) ||
      normalize(location.toLowerCase()).includes(searchNorm)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-5">
        <SearchBar value={search} onChange={setSearch} />
        {houses.length === 0 ? (
          <Feedback message="No hay casas disponibles." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">
                No hay casas que coincidan con la búsqueda.
              </div>
            ) : (
              filtered.map((house) => <HouseCard key={house.id} house={house} />)
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const houses = await getHouses();
    return {
      props: { houses },
      revalidate: 60, // ISR: regenerar cada 60 segundos
    };
  } catch {
    return {
      props: { houses: [] },
      revalidate: 60,
    };
  }
};

export default Home;
