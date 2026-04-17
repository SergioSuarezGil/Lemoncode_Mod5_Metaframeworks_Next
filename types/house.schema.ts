import { z } from 'zod';

export const HouseReviewSchema = z.object({
  id: z.string().or(z.number().transform(String)),
  date: z.string().default('Sin fecha'),
  author: z.string().default('Anónimo'),
  comment: z.string().default('Sin comentario'),
  rating: z.number().default(0),
});

export const HouseSchema = z.object({
  id: z.string().or(z.number().transform(String)),
  name: z.string().default('Casa sin nombre'),
  description: z.string().default('Descripción no disponible'),
  address: z.string().default('Dirección no disponible'),
  city: z.string().default('Ciudad no disponible'),
  country: z.string().default('País no disponible'),
  bedrooms: z.number().int().default(0),
  bathrooms: z.number().int().default(0),
  beds: z.number().int().default(0),
  price: z.number().default(0),
  image: z.string().default('/images/placeholder.png'),
  amenities: z.array(z.string()).default([]),
  reviews: z.array(HouseReviewSchema).default([]),
  location: z.string().optional(),
});

export function parseHouse(raw: unknown) {
  const house = HouseSchema.parse(raw);
  return {
    id: house.id,
    name: house.name,
    description: house.description,
    address: house.address,
    location: [house.address, house.city, house.country].filter(Boolean).join(', '),
    rooms: house.bedrooms,
    beds: house.beds,
    baths: house.bathrooms,
    price: house.price,
    image: house.image
      ? house.image.startsWith('casa-')
        ? `/images/${house.image}`
        : house.image.startsWith('http')
          ? house.image
          : house.image.startsWith('/')
            ? house.image
            : `/images/${house.image}`
      : '/images/placeholder.png',
    reviews:
      house.reviews?.map((r) => ({
        date: r.date,
        author: r.author,
        comment: r.comment,
      })) || [],
  };
}
