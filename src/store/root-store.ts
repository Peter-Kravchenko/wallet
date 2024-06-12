import { CardsDataStore } from './cards-data-store';
import { ModalStore } from './modal-store';

class RootStore {
  cardsDataStore;
  modalStore;

  constructor() {
    this.cardsDataStore = new CardsDataStore();
    this.modalStore = new ModalStore();
  }
}

export default RootStore;
