import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Manager Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Manager/i);
  expect(linkElement).toBeInTheDocument();
});
