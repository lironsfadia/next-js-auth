function SignupSuccess() {
  return (
    <div className='modal-body text-center'>
      <h4>Great!</h4>
      <p>Your account has been created successfully.</p>
      <button className='btn btn-success' data-dismiss='modal'>
        <span>Start Exploring</span> <i className='material-icons'></i>
      </button>
    </div>
  );
}

export default SignupSuccess;
