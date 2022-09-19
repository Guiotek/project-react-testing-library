import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('testa <About/>', () => {
  it('test se existe o texto "About Pokédex"', () => {
    render(<NotFound />);

    const text = screen.getByText('Page requested not found');

    expect(text).toBeInTheDocument();
  });

  it('', () => {
    render(<NotFound />);

    const img = screen.getByRole(
      'img',
      { name: /pikachu crying because the page requested was not found/i },
    );
    console.log(img);
    expect(img).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
