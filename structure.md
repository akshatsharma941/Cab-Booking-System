cab-booking-system/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Booking.jsx
│   │   ├── MapView.jsx
│   │   ├── RideSelector.jsx
│   │   ├── Tracking.jsx
│   │   └── History.jsx
│   ├── context/
│   │   └── BookingContext.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Booking.css
│   │   └── MapView.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js

What each part does:
- Navbar.jsx — navigation, Ride/Rent tabs, login and signup.
- Booking.jsx — pickup, destination, scheduling and search.
- MapView.jsx — interactive map with markers and routes.
- RideSelector.jsx — vehicle options, estimated fares and selection.
- Tracking.jsx — driver details and ride status.
- History.jsx — previous rides and receipts.
- BookingContext.jsx — shared booking data across components.
- App.jsx — assembles the page and switches between views.

What to implement next (in order):
1. Location autocomplete: let users type addresses and select actual places.
2. Route display: show pickup and destination markers and draw a route between them.
3. Ride selection: display Mini, Sedan and SUV cards with estimated fares.
4. Booking state: introduce BookingContext.jsx to share pickup, destination and selected vehicle across components.
5. Tracking and history: simulate a driver approaching, ride progress, and past bookings.


