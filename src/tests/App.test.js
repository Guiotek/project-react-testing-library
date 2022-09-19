import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa os links', () => {
  it('testando nomes', () => {
    renderWithRouter(<App />);

    const home = screen.getByText('Home');
    const about = screen.getByText('About');
    const favorite = screen.getByText('Favorite Pokémons');

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
  });

  it('testa rota "Home"', () => {
    const { history } = renderWithRouter(<App />);
    const roleHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(roleHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('testa rota "About"', () => {
    const { history } = renderWithRouter(<App />);
    const roleAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(roleAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('testa rota "Favorite"', () => {
    const { history } = renderWithRouter(<App />);
    const roleFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(roleFavorite);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
