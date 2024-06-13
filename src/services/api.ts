import axios from 'axios';
import { TCards } from '../types/cards';

const BACKEND_URL = 'http://devapp.bonusmoney.pro/mobileapp/getAllCompanies';

const currentHeaders = {
  TOKEN: '123',
  'Content-Type': 'application/json',
};

export async function getAllCards(
  offset: number = 0,
  limit: number = 10
): Promise<TCards> {
  const { data } = await axios.post<{ companies: TCards }>(
    BACKEND_URL,
    {
      offset,
      limit,
    },
    {
      headers: currentHeaders,
    }
  );
  return data.companies;
}
