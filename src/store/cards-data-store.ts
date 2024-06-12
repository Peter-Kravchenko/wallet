import { makeAutoObservable, runInAction } from 'mobx';
import { RequestStatus } from '../const';
import { TCard, TCards } from '../types/cards';
import { getAllCards } from '../services/api';

export class CardsDataStore {
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
      runInAction(() => {
        this.fetchingStatus = RequestStatus.Rejected;
      });
    }
  }
  setCard(card: TCard): void {
    this.card = card;
  }
}
