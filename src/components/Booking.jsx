import { useState } from "react";
import "../styles/Booking.css";

export default function Booking() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (!pickup.trim() || !dropoff.trim()) {
      alert("Enter both pickup and dropoff locations.");
      return;
    }

    alert(`Pickup: ${pickup}\nDropoff: ${dropoff}`);
  }

  return (
    <section className="booking-panel">
      <h2>Get a ride</h2>

      <form onSubmit={handleSearch}>
        <label className="location-input">
          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Pickup location"
            aria-label="Pickup location"
          />
        </label>

        <label className="location-input">
          <input
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Dropoff location"
            aria-label="Dropoff location"
          />
        </label>

        <select className="schedule-select" defaultValue="now">
          <option value="now">Pickup now</option>
          <option value="schedule">Schedule for later</option>
        </select>

        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
