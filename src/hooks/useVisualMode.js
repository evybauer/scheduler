import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(valueTo, replace) {
    if (!replace) {
      setHistory(prev => [...prev, mode]);
    }
    setMode(valueTo);
  }

  function back() {
    if (history.length >= 1) {
      setMode(history[history.length - 1]);
      setHistory(prev => [...prev.slice(0, -1)]);
    }
  }

  return { transition, mode, back };
}