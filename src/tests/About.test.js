import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('testa <About/>', () => {
  it('test se existe o texto "About Pokédex"', () => {
    render(<About />);

    const text = screen.getByText('About Pokédex');

    expect(text).toBeInTheDocument();
  });

  it('', () => {
    render(<About />);

    const img = screen.getByRole('img', { name: /pokédex/i });
    expect(img).toHaveProperty('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
