import React, { useState } from "react";

// CurrencyConvertor Component
function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const conversionRate = 0.011;

  const handleSubmit = (e) => {
    e.preventDefault();
    const rupeesNum = parseFloat(rupees);
    if (!isNaN(rupeesNum)) {
      setEuro((rupeesNum * conversionRate).toFixed(2));
    } else {
      setEuro(null);
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Currency Convertor (INR to Euro)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit" style={{ marginLeft: 10 }}>
          Convert
        </button>
      </form>
      {euro !== null && (
        <p>
          ₹{rupees} = €{euro}
        </p>
      )}
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const [helloMessage, setHelloMessage] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [clickedMessage, setClickedMessage] = useState("");

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const sayHello = () => {
    setHelloMessage("Hello! Welcome to the event handling demo.");
  };

  const handleIncrement = () => {
    incrementCounter();
    sayHello();
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const sayWelcome = (msg) => {
    setWelcomeMessage(msg);
  };

  const handleClick = () => {
    setClickedMessage("I was clicked");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Event Handling Examples</h1>

      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} style={{ marginLeft: 10 }}>
          Decrement
        </button>
        {helloMessage && <p>{helloMessage}</p>}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
        {welcomeMessage && <p>{welcomeMessage}</p>}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleClick}>Click Me</button>
        {clickedMessage && <p>{clickedMessage}</p>}
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
