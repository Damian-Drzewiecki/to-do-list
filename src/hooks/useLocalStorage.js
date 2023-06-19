import { useEffect, useState } from 'react';

const DATA = 'Data';
const userData = localStorage.getItem(DATA);

export default function useLocalStorage() {
  const [state, setState] = useState(() => {
    if (userData) {
      return JSON.parse(userData);
    }
    return [];
  });

  useEffect(() => {
    if (state !== undefined) {
      localStorage.setItem(DATA, JSON.stringify(state));
    }
    console.log(state);
  }, [state]);

  const setStorage = (newState) => setState(newState);

  return [state, setStorage];
}
