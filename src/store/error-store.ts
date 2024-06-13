import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';

class ErrorStore {
  error: AxiosError | null = null;
  message: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setError = (axiosError: AxiosError): void => {
    this.error = axiosError;
    const { status, data } = axiosError.response || {};

    this.message =
      status === 400
        ? data?.message || axiosError.message
        : status === 401
        ? 'Authorization error'
        : status === 500
        ? 'Something went wrong'
        : axiosError.message;
  };

  clearError = (): void => {
    this.error = null;
    this.message = '';
  };
}
const errorStore = new ErrorStore();
export default errorStore;
