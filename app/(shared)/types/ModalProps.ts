export type ModalProps = {
  handleClose: () => void;
  modalId: string;
  modalTitle: string;
  modalStyle: string;
  children: JSX.Element | JSX.Element[];
};
