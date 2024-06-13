import { useEffect, useState } from 'react';

type DataStore = {
  fetchCards: () => Promise<void>;
};

export const useScrollLoad = (dataStore: DataStore): void => {
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      dataStore.fetchCards();
    }
  }, [isAtBottom, dataStore]);
};
