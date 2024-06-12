import styled from 'styled-components';
import MainPage from '../main-page/main-page';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

function App(): JSX.Element {
  return (
    <AppWrapper>
      <MainPage />
    </AppWrapper>
  );
}

export default App;
