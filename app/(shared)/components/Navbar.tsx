'use client';

import { useCallback, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import { Urls } from '@/constants/enums';
import Modal from './modals/Modal';
import SignUpForm from './forms/SignUpForm';

export default function Navbar(): JSX.Element {
  const { data: session } = useSession();
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleCloseSignUpModal = useCallback(() => {
    setShowSignUpModal(false);
  }, []);

  return (
    <>
      {showSignUpModal ? (
        <Modal handleClose={handleCloseSignUpModal} modalId='signUpModal' modalTitle='Sign Up' modalStyle='modal-lg'>
          <SignUpForm handleSubmitForm={handleCloseSignUpModal} />
        </Modal>
      ) : null}

      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href={`${Urls.HOME}`}>
            Homeware Store
          </a>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            {session?.user ? (
              <>
                <p className='lead text-primary'>
                  <strong>{session.user.name}</strong>
                </p>
                <button className='btn btn-primary' type='button' onClick={() => signOut()}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button className='btn btn-primary' type='button' onClick={() => setShowSignUpModal(true)}>
                  Sign Up
                </button>
                <button className='btn btn-primary' type='button' onClick={() => signIn()}>
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
