import { useEffect, useState } from 'react';
import MainPage from '../main-page/main-page';
import IntroPage from '../intro-page/intro-page';

function App(): JSX.Element {
  const [isIntroLoading, setIsIntroLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsIntroLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  // return isIntroLoading ? <IntroPage /> : <MainPage />;

  return <MainPage />;
}

export default App;
