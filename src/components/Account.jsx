import { useState, useContext } from 'react';
import { AccountContext } from '../context/accountContext';

export default function Account({ transferToPerson }) {

  const { state, dispatch } = useContext(AccountContext);

  const [transferAmount, setTransferAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      // setAccountBalance((prev) => prev - transferAmount);
      dispatch({ type: 'DECREASE_ACCOUNT_BALANCE', payload: transferAmount });
      setTransferAmount(0);
    }, 200);
  };

  return (
    <>
      <h1>Account</h1>
      <p>Current account balance: {state.balance}</p>
      <p>Send money to {transferToPerson}</p>
      <form onSubmit={onSubmit}>
        <label htmlFor='transferAmount'>Transfer Amount:</label>
        <input id='transferAmount' min='0' type='number' value={transferAmount} onChange={(e) => setTransferAmount(e.target.value)} />
        <button type='submit'>Send</button>
      </form>
    </>
  );
}
