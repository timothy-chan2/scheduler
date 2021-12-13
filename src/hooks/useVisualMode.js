import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);

    setHistory(prev => {
      // Use prev to avoid stale state
      const tempHistory = [...prev];

      if (replace) {
        tempHistory.pop();
      }
      tempHistory.push(newMode);
      setHistory(tempHistory);
    });
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(prev => {
        const tempHistory = [...prev];
  
        tempHistory.pop();
        setHistory(tempHistory);
        setMode(tempHistory[tempHistory.length - 1]);
      });
    }
  };

  return { mode, transition, back };
};