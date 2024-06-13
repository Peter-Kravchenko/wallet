import { makeAutoObservable, runInAction } from 'mobx';
import { ModalType, RequestStatus } from '../const';
import { TCard, TCards } from '../types/cards';
import { getAllCards } from '../services/api';
import errorStore from './error-store';
import { AxiosError } from 'axios';
import modalStore from './modal-store';

class CardsDataStore {
  cards: TCards = [];
  card: TCard | null = null;
  isEmpty: boolean = false;
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
        if (cardList.length) {
          this.cards.push(...cardList);
          this.fetchingStatus = RequestStatus.Success;
        } else {
          this.isEmpty = true;
          this.fetchingStatus = RequestStatus.Success;
        }
      });
    } catch (error) {
      this.fetchingStatus = RequestStatus.Rejected;
      errorStore.setError(error as AxiosError);
      modalStore.openModal(ModalType.Error);
    }
  }
  setCard(card: TCard): void {
    this.card = card;
  }
}

export const cardsDataStore = new CardsDataStore();
export default cardsDataStore;
