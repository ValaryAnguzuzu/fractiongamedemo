import React from "react";

const ResultMessage = ({ result }) => {
  if (result === null) return null;
  return (
    <div className={`result ${result ? "success" : "fail"}`}>
      {result ? "🎉 Great job!" : "😅 Nice try — keep going!"}
    </div>
  );
};

export default ResultMessage;
