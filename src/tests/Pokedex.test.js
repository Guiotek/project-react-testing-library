import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa "<Pokedex />"', () => {
  it('testa nome', async () => {
    renderWithRouter(<App />);

    const text = await screen.getByText('Encountered pokémons');

    expect(text).toBeInTheDocument();
  });
  it('', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByTestId('pokemon-type-button');
    const a = 7;

    expect(buttons.length).toBe(a);
  });
  it('', () => {
    renderWithRouter(<App />);

    const t1 = screen.getByRole('button', { name: /electric/i });
    const t2 = screen.getByRole('button', { name: /fire/i });
    const t3 = screen.getByRole('button', { name: /bug/i });
    const t4 = screen.getByRole('button', { name: /poison/i });
    const t5 = screen.getByRole('button', { name: /psychic/i });
    const t6 = screen.getByRole('button', { name: /normal/i });
    const t7 = screen.getByRole('button', { name: /dragon/i });

    expect(t1).toBeInTheDocument();
    expect(t2).toBeInTheDocument();
    expect(t3).toBeInTheDocument();
    expect(t4).toBeInTheDocument();
    expect(t5).toBeInTheDocument();
    expect(t6).toBeInTheDocument();
    expect(t7).toBeInTheDocument();
  });
  it('', () => {
    renderWithRouter(<App />);

    const btn = screen.getByRole('button', { name: /all/i });
    userEvent.click(btn);
    const btn2 = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(btn2);
    const pokemon = screen.getByText(/charmander/i);

    expect(pokemon).toBeInTheDocument();
  });
});
