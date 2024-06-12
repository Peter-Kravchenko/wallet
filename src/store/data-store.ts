import { makeAutoObservable, runInAction } from 'mobx';
import { RequestStatus } from '../const';
import { Card, Cards } from '../types/cards';
import { getAllCards } from '../services/api';

export class CardsDataStore {
  cards: Cards = [];
  card: Card | null = null;
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
        if (cardList) {
          this.cards.push(...cardList);
          this.fetchingStatus = RequestStatus.Success;
        } else {
          this.fetchingStatus = RequestStatus.Rejected;
        }
      });
    } catch (error) {
      runInAction(() => {
        this.fetchingStatus = RequestStatus.Rejected;
      });
    }
  }
}

