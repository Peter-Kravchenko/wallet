import { RequestStatus } from '../const';
import { Card } from './cards';

export type CardsData = {
  cards: Card[];
  card: Card | null;
  fetchingStatus: RequestStatus;
  offset: number;
};
