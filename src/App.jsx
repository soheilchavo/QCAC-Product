import React, { useState } from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import AddReviewForm from './components/AddReviewForm.jsx';

export default function App() {
  const [reviewCount, setReviewCount] = useState(0);

  const handleReviewAdded = (newReview) => {
    setReviewCount(prev => prev + 1);
  };

  return (
    <div>
      <Hero />
      <Features />
      <Reviews key={reviewCount} />
      <AddReviewForm onReviewAdded={handleReviewAdded} />
    </div>
  );
}
