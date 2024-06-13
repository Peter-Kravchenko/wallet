import cardsDataStore from './data-store';
import errorStore from './error-store';
import modalStore from './modal-store';

class RootStore {
  cardsDataStore = cardsDataStore;
  modalStore = modalStore;
  errorStore = errorStore;
}

export default RootStore;
