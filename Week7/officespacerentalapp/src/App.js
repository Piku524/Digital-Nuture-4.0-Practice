import React from "react";

function Office({ office }) {
  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green",
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <h3>{office.name}</h3>
      <p><strong>Address:</strong> {office.address}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={rentStyle}>₹{office.rent.toLocaleString()}</span>
      </p>
    </div>
  );
}

function App() {
  const heading = "Office Space Rental Listings";

  const imageUrl =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60";

  const offices = [
    { name: "Skyline Towers", rent: 75000, address: "123 Downtown Ave, Cityville" },
    { name: "Greenwood Plaza", rent: 58000, address: "456 Maple St, Townsville" },
    { name: "Sunset Business Center", rent: 62000, address: "789 Sunset Blvd, Metropolis" },
    { name: "Riverside Office Hub", rent: 55000, address: "101 River Rd, Lakeside" },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1>{heading}</h1>
      <img
        src={imageUrl}
        alt="Office Space"
        style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "20px" }}
      />
      {offices.map((office, index) => (
        <Office key={index} office={office} />
      ))}
    </div>
  );
}

export default App;
