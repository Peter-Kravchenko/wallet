import React, { useEffect } from 'react';
import { useStore } from '../../context/root-store-context';
import Card from '../card/card';

function CardList(): JSX.Element {
  const { dataStore } = useStore();

  useEffect(() => {
    dataStore.fetchCards();
    console.log('fetch');
  }, [dataStore]);

  console.log('store', dataStore.fetchingStatus);

  return (
    <React.Fragment>
      {dataStore.cards.map((card) => (
        <Card key={card.company.companyId} card={card} />
      ))}
    </React.Fragment>
  );
}

export default CardList;
