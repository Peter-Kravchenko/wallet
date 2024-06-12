import styled from 'styled-components';
import Header from '../header/header';
import Card from '../card/card';

const MainPageWrapper = styled.main`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
`;

function MainPage(): JSX.Element {
  return (
    <MainPageWrapper>
      <Header />
      {[...Array(50)].map((_, index) => (
        <Card key={index} />
      ))}
    </MainPageWrapper>
  );
}

export default MainPage;
