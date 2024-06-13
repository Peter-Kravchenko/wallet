import { makeAutoObservable } from 'mobx';
import { ModalType } from '../const';

class ModalStore {
  isOpen: boolean = false;
  modalType: ModalType = ModalType.Default;
  constructor() {
    makeAutoObservable(this);
  }
  openModal(type: ModalType) {
    this.isOpen = true;
    this.modalType = type;
  }

  closeModal() {
    this.isOpen = false;
    this.modalType = ModalType.Default;
  }
}

const modalStore = new ModalStore();
export default modalStore;
