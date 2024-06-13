import { useStore } from '../../context/root-store-context';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalType } from '../../const';
import { Image } from 'react-bootstrap';

function ModalCard(): JSX.Element {
  const { dataStore, modalStore, errorStore } = useStore();

  const handleClose = () => {
    modalStore.closeModal();
    errorStore.clearError();
  };

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalStore.isOpen}
        onHide={handleClose}
      >
        {modalStore.modalType === ModalType.Error ? (
          <Modal.Body>
            <Image
              className="mx-auto d-block"
              alt="exclamation"
              src="src/assets/img/exclamation_white.png"
              roundedCircle
              style={{ maxWidth: '15vw' }}
            />
            <br />
            Произошла ошибка при загрузке карточки
            <br />
            {errorStore.message}
            <br />
          </Modal.Body>
        ) : (
          <Modal.Body>
            Нажата кнопка {modalStore.modalType} <br /> <br />
            ID компании: {dataStore.card?.company.companyId}
          </Modal.Body>
        )}
        <Modal.Footer className="justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCard;
