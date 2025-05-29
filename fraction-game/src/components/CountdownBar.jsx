import React, { useState, useEffect } from "react";

const CountdownBar = ({ seconds, onFinish }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onFinish]);

  return (
    <div className="countdown">
      <div
        className="bar"
        style={{ width: `${(timeLeft / seconds) * 100}%` }}
      />
    </div>
  );
};

export default CountdownBar;
