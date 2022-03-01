import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText('Taco Truck Locations');
  expect(title).toBeInTheDocument();
});

test('renders main container', () => {
  const { container } = render(<App />);
  expect(container.getElementsByClassName('mainContainer').length).toBe(1)
});
