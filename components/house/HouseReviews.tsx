import React from 'react';
import { Review } from '../../types/house';

interface HouseReviewsProps {
  reviews: Review[];
}

export const HouseReviews: React.FC<HouseReviewsProps> = ({ reviews }) => (
  <section className="mt-8">
    <h2 className="text-xl font-bold mb-4">Reseñas</h2>
    <div className="flex flex-col gap-4">
      {reviews.map((review, idx) => (
        <div key={idx} className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-500 mb-1">Fecha: {review.date}</div>
          <div className="font-semibold">{review.author}:</div>
          <div>{review.comment}</div>
        </div>
      ))}
    </div>
  </section>
);
