import React from 'react';

interface FeedbackProps {
  message: string;
  className?: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ message, className = '' }) => (
  <div className={`text-center text-lg ${className}`}>{message}</div>
);
