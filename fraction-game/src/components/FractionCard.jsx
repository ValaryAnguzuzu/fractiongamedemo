import React from "react";

const FractionCard = ({ value, onClick, isSelected }) => {
  return (
    <button
      className={`card ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default FractionCard;
