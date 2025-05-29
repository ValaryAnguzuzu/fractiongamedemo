import React, { useState } from "react";

const ComparisonWheel = ({ onSpin }) => {
  const comparisons = [">", "<", "="];
  const [result, setResult] = useState("");

  const handleSpin = () => {
    const choice = comparisons[Math.floor(Math.random() * comparisons.length)];
    setResult(choice);
    onSpin(choice);
  };

  return (
    <div className="wheel">
      <button onClick={handleSpin}>Spin Comparison Wheel</button>
      {result && <h2>🌀 {result}</h2>}
    </div>
  );
};

export default ComparisonWheel;
