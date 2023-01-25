import Link from 'next/link';

import { ModalProps } from '@/types/ModalProps';

function Modal({ handleClose, modalId, modalTitle, modalStyle, children }: ModalProps): JSX.Element {
  return (
    <div className='modal modal-signin d-block py-5' tabIndex={-1} role='dialog' id={modalId} data-backdrop='false'>
      <div className={`modal-dialog ${modalStyle}`} role='document'>
        <div className='modal-content rounded-4 shadow'>
          <div className='modal-header p-5 pb-4 border-bottom-0'>
            <h1 className='fw-bold mb-0 fs-2'>{modalTitle}</h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={handleClose}
            />
          </div>
          <div className='modal-body p-5 pt-0'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
