import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa "<Pokedex />"', () => {
  it('testa nome', async () => {
    renderWithRouter(<App />);

    const text = await screen.getByText('Encountered pokémons');

    expect(text).toBeInTheDocument();
  });
  it('testa botoes pokemon', async () => {
    renderWithRouter(<App />);

    const button1 = screen.getByRole('button', {
      name: /electric/i,
    });

    expect(button1).toHaveProperty();
  });
});
