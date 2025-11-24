import React, { useState, useEffect } from 'react';
import '../styles/reviews.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Load sample reviews
    const sampleReviews = [
      {
        id: 1,
        name: "Sarah Chen",
        rating: 5,
        text: "The most iconic game ever made!"
      },
      {
        id: 2,
        name: "James Rodriguez",
        rating: 5,
        text: "Perfect platformer that started it all."
      },
      {
        id: 3,
        name: "Emily Watson",
        rating: 4,
        text: "Revolutionary masterpiece that still holds up today."
      }
    ];

    // Load stored reviews from localStorage
    const storedReviews = localStorage.getItem('productReviews');
    const savedReviews = storedReviews ? JSON.parse(storedReviews) : [];

    // Combine sample and stored reviews
    const allReviews = [...sampleReviews, ...savedReviews];
    setReviews(allReviews);
  }, []);

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h3 className="reviewer-name">{review.name}</h3>
              <div className="review-rating">{renderStars(review.rating)}</div>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
