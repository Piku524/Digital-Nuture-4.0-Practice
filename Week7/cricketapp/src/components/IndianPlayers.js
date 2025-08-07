import React from "react";

// Destructuring to show odd-indexed players
export function OddPlayers([first, , third, , fifth]) {
  return (
    <div>
      <div>First: {first}</div>
      <div>Third: {third}</div>
      <div>Fifth: {fifth}</div>
    </div>
  );
}

// Destructuring to show even-indexed players
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <div>
      <div>Second: {second}</div>
      <div>Fourth: {fourth}</div>
      <div>Sixth: {sixth}</div>
    </div>
  );
}

// Merge two arrays
const T20Players = ["First Player", "Second Player", "Third Player"];
const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];