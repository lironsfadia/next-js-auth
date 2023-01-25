'use client';

import React, { useCallback, useState } from 'react';
import LogInForm from '@/components/forms/LogInForm';
import Modal from '@/components/modals/Modal';

export default function Page() {
  const [showLogInModal, setShowLogInModal] = useState(false);

  const handleCloseLogInModal = useCallback(() => {
    setShowLogInModal(false);
  }, []);
  return (
    <>
      <Modal modalId='signUpModal' modalTitle='' modalStyle='modal-md' handleClose={() => {}}>
        <LogInForm handleSubmitForm={() => setShowLogInModal(false)} />
      </Modal>
    </>
  );
}
