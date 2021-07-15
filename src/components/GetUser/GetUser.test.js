import { renderWithClient } from '../../tests/utils';
import GetUser from './GetUser';

test('if the user is fetched, the name is shown', async () => {
  const result = renderWithClient(<GetUser />);

  expect(await result.findByText(/John Doe/i)).toBeInTheDocument();
});