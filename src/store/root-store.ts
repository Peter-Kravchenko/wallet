import { CardsDataStore } from './data-store';

class RootStore {
  dataStore;
  constructor() {
    this.dataStore = new CardsDataStore();
  }
}

export default RootStore;
