import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Header from '../header/header';
import { useStore } from '../../context/root-store-context';
import { RequestStatus } from '../../const';
import Loader from '../loader/loader';
import ModalCard from '../modal-card/modal-card';
import CardList from '../card-list/card-list';
import { useScrollLoad } from '../../hooks/use-scroll-load';

const MainPageWrapper = styled.main`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: auto;
`;

const MainPage: React.FC = observer(() => {
  const { dataStore, modalStore } = useStore();

  useScrollLoad(dataStore);

  return (
    <MainPageWrapper>
      <Header />
      <CardList />
      {dataStore.fetchingStatus === RequestStatus.Pending ? <Loader /> : null}
      {modalStore.isOpen ? <ModalCard /> : null}
    </MainPageWrapper>
  );
});

export default MainPage;
