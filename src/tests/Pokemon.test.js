import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testa pokemons', () => {
  it('testa imagens', () => {
    renderWithRouter(<App />);

    const image = screen.getByRole('img', {
      name: /pikachu sprite/i,
    });

    const more = screen.getByRole('link', { name: /more details/i });
    userEvent.click(more);
    const check = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(check);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);

    const star = screen.getByRole('img', { name: /pikachu is marked as favorite/i });

    expect(star).toHaveProperty('src', 'http://localhost/star-icon.svg');
    expect(image).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('testa type', () => {
    renderWithRouter(<App />);
    const more = screen.getByRole('link', { name: /more details/i });
    userEvent.click(more);

    const type = screen.getAllByText(/electric/i);

    console.log(type);

    expect(type.length).toBe(2);
  });
});
