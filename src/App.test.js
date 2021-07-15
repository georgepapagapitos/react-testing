import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { AccountProvider } from './context/accountContext';

test('if $500 is sent, the account balance is updated', async () => {
  render(<AccountProvider><App /></AccountProvider>);

  userEvent.type(screen.getByRole('spinbutton', { name: /transfer amount:/i }), '500');
  userEvent.click(screen.getByRole('button', { name: /send/i }));

  expect(await screen.findByText(/current account balance: 4500/i)).toBeInTheDocument();
  expect(screen.queryByText(/current account balance: 5000/i)).not.toBeInTheDocument();
});

test('if transferToPerson name prop is passed, render the name', () => {
  render(<AccountProvider><App transferToPerson="Jimmy John" /></AccountProvider>);

  expect(screen.getByText(/send money to jimmy john/i)).toBeInTheDocument();
});