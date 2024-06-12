import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Header from '../header/header';
import Card from '../card/card';
import { useStore } from '../../context/root-store-context';
import { useEffect } from 'react';
import { RequestStatus } from '../../const';
import Loader from '../loader/loader';
import EmptyPage from '../empty-page/empty-page';

const MainPageWrapper = styled.main`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
`;

const MainPage = observer(() => {
  const { cardsDataStore } = useStore();

  useEffect(() => {
    cardsDataStore.fetchCards();
  }, [cardsDataStore]);

  return (
    <MainPageWrapper>
      <Header />
      {cardsDataStore.fetchingStatus === RequestStatus.Pending ? (
        <Loader />
      ) : null}
      {cardsDataStore.isEmpty ? <EmptyPage /> : null}
      {cardsDataStore.fetchingStatus === RequestStatus.Success &&
        cardsDataStore.cards.map((card) => (
          <Card key={card.company.companyId} card={card} />
        ))}
    </MainPageWrapper>
  );
});

export default MainPage;
