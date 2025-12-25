# Hotel - Luxury Hotel Booking System

A modern, responsive hotel booking web application built with React, TypeScript, and Tailwind CSS.

## 🏨 Features

- **Home Page**: Hero section, featured rooms, amenities, testimonials, and promotional CTA
- **Rooms Page**: Browse all available rooms with filtering by type and price range
- **Booking Page**: Complete booking form with date selection and validation
- **Contact Page**: Contact information and inquiry form
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Form Validation**: Client-side validation using Zod and React Hook Form
- **Booking ID Generation**: Unique booking confirmation IDs

## 📁 Project Structure

```
src/
├── assets/              # Static images
├── components/
│   ├── booking/         # Booking form components
│   ├── contact/         # Contact form components
│   ├── home/            # Home page sections
│   ├── layout/          # Navbar and Footer
│   ├── rooms/           # Room card and filters
│   └── ui/              # Shadcn UI components
├── data/
│   └── rooms.ts         # Mock room data (static JSON)
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── pages/               # Page components
    ├── Index.tsx        # Home page
    ├── Rooms.tsx        # Rooms listing
    ├── Booking.tsx      # Booking page
    ├── Contact.tsx      # Contact page
    └── NotFound.tsx     # 404 page
```

## 🚀 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **React Router** - Navigation
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons
- **date-fns** - Date formatting
- **uuid** - Unique ID generation

## 🎨 Design System

The application uses a luxury hotel-inspired design:

- **Primary Color**: Deep Navy (#1e2a4a)
- **Accent Color**: Champagne Gold (#c9a961)
- **Typography**: Playfair Display (headings), DM Sans (body)
- **Theme**: Warm cream backgrounds with elegant animations

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:8080 in your browser

## 📋 Mock Data

Room data is stored in `src/data/rooms.ts` as static JSON, simulating a backend API response.

## ✅ Validation

All forms include:
- Required field validation
- Email format validation
- Phone number validation
- Date range validation (check-out must be after check-in)
- Character length limits

## 🔧 Optional Features Implemented

- ✅ Room filtering by type and price
- ✅ Date selection with calendar picker
- ✅ Booking ID generation
- ✅ Responsive design

## 📄 License

MIT License
