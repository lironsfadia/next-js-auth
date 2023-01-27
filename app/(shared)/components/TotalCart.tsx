import { appState } from '@/src/store';

function TotalCart() {
  const { cartTotal } = appState();
  return (
    <>
      <strong className='d-inline-block mb-2 text-success'>${cartTotal.toFixed(2)}</strong>
      <button
        className='btn btn-outline-success my-2 my-sm-0'
        type='submit'
        onClick={() => {
          appState.setState((state) => ({ cartTotal: 0 }));
        }}>
        Clear
      </button>
    </>
  );
}
export default TotalCart;
