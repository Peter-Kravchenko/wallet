import MainPage from '../main-page/main-page';
import IntroPage from '../intro-page/intro-page';
import useIntroLoading from '../../hooks/use-intro-loading';

function App(): JSX.Element {
  const isIntroLoading = useIntroLoading(true, 3000);

  return isIntroLoading ? <IntroPage /> : <MainPage />;
}

export default App;
