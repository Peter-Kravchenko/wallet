import { RequestStatus } from '../const';
import { TCard } from './cards';

export type CardsData = {
  cards: TCard[];
  card: TCard | null;
  fetchingStatus: RequestStatus;
  offset: number;
};
