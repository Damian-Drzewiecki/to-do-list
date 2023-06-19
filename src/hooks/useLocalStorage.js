import { useEffect, useState } from 'react';

export default function useLocalStorage(localStorageKey, initialValue) {
  const [state, setState] = useState(() => {
    const userData = localStorage.getItem(localStorageKey);
    if (userData) {
      return JSON.parse(userData);
    }
    return initialValue;
  });

  useEffect(() => {
    if (state !== undefined) {
      localStorage.setItem(localStorageKey, JSON.stringify(state));
    }
  }, [state, localStorageKey]);

  const setStorage = (newState) => setState(newState);

  return [state, setStorage];
}
