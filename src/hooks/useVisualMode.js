import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    const tempHistory = [...history];
    setMode(newMode);

    if (replace) {
      tempHistory.pop();
    }
    tempHistory.push(newMode);
    setHistory(tempHistory);
  };

  const back = () => {
    if (history.length > 1) {
      const tempHistory = [...history];

      tempHistory.pop();
      setHistory(tempHistory);
      setMode(tempHistory[tempHistory.length - 1]);
    }
  };

  return { mode, transition, back };
};