import { CardsDataStore } from './cards-data-store';

class RootStore {
  cardsDataStore;
  constructor() {
    this.cardsDataStore = new CardsDataStore();
  }
}

export default RootStore;
