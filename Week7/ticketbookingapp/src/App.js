import React, { useState } from "react";

// Guest Component - shows flight info
function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Flight Details:</p>
      <ul>
        <li>Flight: AI202</li>
        <li>From: New Delhi</li>
        <li>To: Mumbai</li>
        <li>Departure: 10:00 AM</li>
      </ul>
      <button onClick={onLogin}>Login to Book Ticket</button>
    </div>
  );
}

// User Component - shows booking option
function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome User!</h2>
      <p>You can now book your ticket.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element variable to hold current page
  let content;
  if (isLoggedIn) {
    content = <UserPage onLogout={handleLogout} />;
  } else {
    content = <GuestPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ticket Booking App</h1>
      {/* Conditional Rendering using element variable */}
      {content}
    </div>
  );
}

export default App;
