import { render, screen } from '@testing-library/react';
import App from './App';
import { getTodosInfo } from './services/todosAPI';

jest.mock('./services/todosAPI');

beforeEach(() => {
  getTodosInfo.mockResolvedValue({ data: [] });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders Manager Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Manager/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows error message when getTodosInfo rejects', async () => {
  getTodosInfo.mockRejectedValue(new Error('Network Error'));
  render(<App />);
  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent(/failed to load tasks/i);
});
