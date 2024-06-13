import { useEffect, useState } from 'react';

type DataStore = {
  fetchCards: () => Promise<void>;
};

export const useScrollLoad = (dataStore: DataStore): void => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollReachedBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setIsAtBottom(scrollReachedBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      dataStore.fetchCards();
    }
  }, [isAtBottom, dataStore]);
};
