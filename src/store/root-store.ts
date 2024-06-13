import dataStore from './data-store';
import errorStore from './error-store';
import modalStore from './modal-store';

class RootStore {
  dataStore = dataStore;
  modalStore = modalStore;
  errorStore = errorStore;
}

export default RootStore;
