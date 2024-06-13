import { useEffect } from 'react';
import { useStore } from '../../context/root-store-context';
import Card from '../card/card';

function CardListComponent(): JSX.Element {
  const { dataStore } = useStore();

  useEffect(() => {
    dataStore.fetchCards();
  }, [dataStore]);

  return (
    <>
      {dataStore.cards.map((card) => (
        <Card key={card.company.companyId} card={card} />
      ))}
    </>
  );
}

export default CardListComponent;
