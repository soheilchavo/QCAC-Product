# Super Mario Bros. Product Page

A modern, responsive product page for Super Mario Bros. featuring product overview, features showcase, customer reviews, and an interactive review submission system with localStorage persistence.

## Description

This is a fully functional React application showcasing a complete product landing page experience. Users can view product information, read customer reviews, and submit their own reviews which are saved locally in the browser using localStorage.

## Features

✨ **Product Overview Section**
- Product name and description
- Product image showcase
- Original release information

🎮 **Features Section**
- Feature cards with icons
- Clean, organized layout
- Hover animations for better UX

⭐ **Customer Reviews**
- Display sample reviews with ratings
- Show reviewer names and feedback
- Dynamic loading of saved reviews from localStorage

📝 **Add Review Form**
- Simple form with name, rating, and review text
- Input validation
- Character counter for review text
- LocalStorage persistence
- Instant display of new reviews

📱 **Responsive Design**
- Mobile-first approach
- Clean, readable layout
- Adapts to all screen sizes

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/QCAC-Product.git
cd QCAC-Product
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with custom animations and responsive design
- **localStorage API** - Client-side data persistence
- **Jersey 10 Font** - Custom typography from Google Fonts

## How It Works

### Reviews System

1. **Sample Reviews**: The app loads 3 sample reviews on startup
2. **localStorage**: User submissions are saved to browser localStorage under the key `productReviews`
3. **Persistent Data**: Saved reviews load automatically when you return to the app
4. **Real-time Updates**: New reviews appear instantly after submission

### Component Structure

- **Hero.jsx** - Hero section with product introduction
- **Features.jsx** - Features showcase and pricing
- **Reviews.jsx** - Display all reviews (sample + saved)
- **AddReviewForm.jsx** - Form for submitting new reviews
- **App.jsx** - Main application component

## File Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Reviews.jsx
│   └── AddReviewForm.jsx
├── styles/
│   ├── global.css
│   ├── hero.css
│   ├── features.css
│   ├── reviews.css
│   └── add-review.css
├── data/
│   └── sampleReviews.json
├── App.jsx
└── main.jsx
```

## Key Features

- **No External APIs**: All data is stored and managed locally
- **Clean UI**: Modern, retro-inspired design matching the Super Mario Bros. theme
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Ensures all required fields are filled before submission
- **Star Ratings**: Visual 5-star rating system using emoji

## Challenges & Solutions

- **Data Persistence**: Used localStorage to save reviews locally without requiring a backend
- **Real-time Updates**: Used React state management to instantly reflect new reviews
- **Responsive Design**: Implemented CSS Grid and media queries for all screen sizes
- **Form Validation**: Added checks to ensure users provide all required information

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- localStorage API
- CSS Grid and Flexbox

## Future Enhancements

- Add edit/delete functionality for reviews
- Implement review sorting and filtering
- Add more detailed analytics
- Backend integration for persistent cloud storage
- Review moderation system

## License

This project is open source and available under the MIT License.

## Author

Built as part of the QCAC Product Assessment Challenge.