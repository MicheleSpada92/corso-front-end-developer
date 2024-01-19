import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter
import App from './App';

test('renders the main App component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const appElement = screen.getByTestId('app-main');
  expect(appElement).toBeInTheDocument();
});
