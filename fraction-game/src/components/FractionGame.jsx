import React, { useState } from "react";
import ComparisonWheel from "./ComparisonWheel";
import FractionCard from "./FractionCard";
import CountdownBar from "./CountdownBar";
import ResultMessage from "./ResultMessage";
import "../styles/styles.css";

const FRACTIONS = ["1/2", "2/3", "3/4", "1/4", "5/6", "1/3", "7/8"];

function getRandomFractions(count = 3) {
  const shuffled = [...FRACTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function FractionGame() {
  const [comparison, setComparison] = useState("");
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleSpin = (comp) => {
    setComparison(comp);
    setCards(getRandomFractions());
    setSelected(null);
    setResult(null);
  };

  const handleCardClick = (value) => {
    if (!comparison) return;
    const other = cards.find((c) => c !== value);
    const [num1, den1] = value.split("/").map(Number);
    const [num2, den2] = other.split("/").map(Number);

    const left = num1 / den1;
    const right = num2 / den2;

    let win = false;
    if (comparison === ">" && left > right) win = true;
    if (comparison === "<" && left < right) win = true;
    if (comparison === "=" && left === right) win = true;

    setSelected(value);
    setResult(win);
  };

  return (
    <div className="game">
      <h1> Fraction Challenge</h1>
      <ComparisonWheel onSpin={handleSpin} />
      {comparison && <CountdownBar seconds={10} onFinish={() => {}} />}
      <div className="cards">
        {cards.map((card) => (
          <FractionCard
            key={card}
            value={card}
            onClick={handleCardClick}
            isSelected={selected === card}
          />
        ))}
      </div>
      <ResultMessage result={result} />
    </div>
  );
}
