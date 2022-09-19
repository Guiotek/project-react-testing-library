import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testando App', () => {
  renderWithRouter(<App />);

  const home = screen.getByText('Home');

  expect(home).toBeInTheDocument();
});
