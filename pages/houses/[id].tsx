import React, { useState } from 'react';
import { ConfirmDialog } from '../../components/common/ConfirmDialog';
import { Feedback } from '../../components/common/Feedback';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getHouseById } from '../../services/housesService';
import { House } from '../../types/house';
import { HouseInfo } from '../../components/house/HouseInfo';
import { ReserveButton } from '../../components/house/ReserveButton';
import { HouseReviews } from '../../components/house/HouseReviews';
import { BackToListLink } from '../../components/common/BackToListLink';

interface Props {
  house: House;
}

const HouseDetailPage: React.FC<Props> = ({ house }) => {
  if (house === undefined) {
    return <Feedback message="Cargando detalle de casa..." />;
  }
  if (!house) {
    return <Feedback message="No se encontró la casa rural solicitada." />;
  }
  const [openDialog, setOpenDialog] = useState(false);
  const handleReserve = () => setOpenDialog(true);
  const handleAccept = () => {
    setOpenDialog(false);
  };
  const handleCancel = () => setOpenDialog(false);

  return (
    <>
      <Head>
        <title>{house.name} - Casa Rural</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{house.name}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <Image
              src={house.image}
              alt={house.name}
              width={600}
              height={400}
              className="rounded-lg object-cover"
              priority
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <HouseInfo house={house} />
            <ReserveButton onClick={handleReserve} />
            <ConfirmDialog
              open={openDialog}
              title="Confirmar reserva"
              message="¿Deseas reservar esta casa rural?"
              onAccept={handleAccept}
              onCancel={handleCancel}
            />
          </div>
        </div>
        {house.reviews && house.reviews.length > 0 && <HouseReviews reviews={house.reviews} />}
        <BackToListLink />
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  const house = await getHouseById(id);
  return { props: { house } };
};

export default HouseDetailPage;
