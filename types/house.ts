export interface Review {
  date: string;
  author: string;
  comment: string;
}

export interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  location: string;
  rooms: number;
  beds: number;
  baths?: number;
  bathrooms?: number;
  price: number;
  image: string;
  reviews?: Review[];
}
