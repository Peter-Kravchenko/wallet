import styled from 'styled-components';
import Header from '../header/header';
import Card from '../card/card';
import { getAllCards } from '../../services/api';

const MainPageWrapper = styled.main`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
`;

function MainPage(): JSX.Element {
  const cards = async () => {
    const cards = await getAllCards();
    console.log(cards);
  };
  cards();

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
