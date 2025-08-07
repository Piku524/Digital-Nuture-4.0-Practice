import React from "react";
import ListOfPlayers, { ScoreBelow70 } from "./ListOfPlayers";
import { OddPlayers, EvenPlayers, IndianPlayers } from "./IndianPlayers";

function App() {
  const flag = true; // change to false to test the second view

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  if (flag) {
    return (
      <div>
        <h1>List of Players</h1>
        <ul>
          {players.map((player, index) => (
            <li key={index}>
              Mr. {player.name} {player.score}
            </li>
          ))}
        </ul>

        <h1>List of Players having Scores Less than 70</h1>
        <ul>
          {players
            .filter((p) => p.score <= 70)
            .map((p, i) => (
              <li key={i}>
                Mr. {p.name} {p.score}
              </li>
            ))}
        </ul>
      </div>
    );
  } else {
    const team = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];
    return (
      <div>
        <h2>Odd Players</h2>
        {OddPlayers(team)}

        <h2>Even Players</h2>
        {EvenPlayers(team)}

        <h2>List of Indian Players Merged:</h2>
        <ListOfPlayers
          players={IndianPlayers.map((p) => ({ name: p, score: 100 }))}
        />
      </div>
    );
  }
}

export default App;