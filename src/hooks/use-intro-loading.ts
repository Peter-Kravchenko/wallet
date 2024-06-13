import { useEffect, useState } from 'react';

function useIntroLoading(initialLoading: boolean, delay: number) {
  const [isIntroLoading, setIsIntroLoading] = useState(initialLoading);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsIntroLoading(false);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return isIntroLoading;
}

export default useIntroLoading;
