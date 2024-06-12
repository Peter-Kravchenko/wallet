import axios from 'axios';
import { Cards } from '../types/cards';

const BACKEND_URL =
  'http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesIdeal';

const currentHeaders = {
  TOKEN: '123',
  'Content-Type': 'application/json',
};

export async function getAllCards(
  offset: number = 0,
  limit: number = 10
): Promise<Cards> {
  try {
    const { data } = await axios.post<{ companies: Cards }>(
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
  } catch (error) {
    console.error('Ошибка при запросе к серверу', error);
    throw new Error('Ошибка при запросе к серверу');
  }
}
