import { makeAutoObservable, runInAction } from 'mobx';
import { ModalType, RequestStatus } from '../const';
import { TCard, TCards } from '../types/cards';
import { getAllCards } from '../services/api';
import errorStore from './error-store';
import { AxiosError } from 'axios';
import modalStore from './modal-store';

class DataStore {
  cards: TCards = [];
  card: TCard | null = null;
  fetchingStatus: RequestStatus = RequestStatus.Idle;

  constructor() {
    makeAutoObservable(this);
  }

  get offset(): number {
    return this.cards.length;
  }

  async fetchCards(): Promise<void> {
    try {
      this.fetchingStatus = RequestStatus.Pending;
      const cardList = await getAllCards(this.offset, 10);
      runInAction(() => {
        this.cards.push(...cardList);
        this.fetchingStatus = RequestStatus.Success;
      });
    } catch (error) {
      this.fetchingStatus = RequestStatus.Rejected;
      modalStore.openModal(ModalType.Error);
      errorStore.setError(error as AxiosError);
    }
  }
  setCard(card: TCard): void {
    this.card = card;
  }
}

export const dataStore = new DataStore();
export default dataStore;
