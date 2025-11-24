import React, { useState } from 'react';
import '../styles/add-review.css';

export default function AddReviewForm({ onReviewAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.text.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Get stored reviews from localStorage
    const storedReviews = localStorage.getItem('productReviews');
    const savedReviews = storedReviews ? JSON.parse(storedReviews) : [];

    // Create new review with unique ID
    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      text: formData.text
    };

    // Add to stored reviews
    savedReviews.push(newReview);
    localStorage.setItem('productReviews', JSON.stringify(savedReviews));

    // Notify parent component
    onReviewAdded(newReview);

    // Reset form
    setFormData({
      name: '',
      rating: 5,
      text: ''
    });
  };

  return (
    <section className="add-review-section">
      <h2 className="form-title">Share Your Review</h2>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            maxLength="50"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
            <option value="4">4 Stars ⭐⭐⭐⭐</option>
            <option value="3">3 Stars ⭐⭐⭐</option>
            <option value="2">2 Stars ⭐⭐</option>
            <option value="1">1 Star ⭐</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="text">Your Review</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Write your review here..."
            rows="4"
            maxLength="500"
          />
          <span className="char-count">{formData.text.length}/500</span>
        </div>

        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </section>
  );
}
