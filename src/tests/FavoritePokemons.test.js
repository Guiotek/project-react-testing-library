import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('testa <FavoritePokemons/>', () => {
  it('testa se aparece o texto', () => {
    render(<FavoritePokemons />);

    const texto = screen.getByText('No favorite pokemon found');
    console.log(texto);

    expect(texto).toBeInTheDocument();
  });
});
