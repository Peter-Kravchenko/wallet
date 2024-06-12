import { makeAutoObservable } from 'mobx';
import { ModalType } from '../const';

export class ModalStore {
  isActive = false;
  modalType: ModalType | null = null;
  constructor() {
    makeAutoObservable(this);
  }
  openModal(type: ModalType) {
    this.isActive = true;
    this.modalType = type;
  }

  closeModal() {
    this.isActive = false;
    this.modalType = null;
  }
}
