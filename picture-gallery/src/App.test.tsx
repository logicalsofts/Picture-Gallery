import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Picture Gallery', () => {
  render(<App />);
  const title = screen.getByText(/Picture Gallery/i);
  expect(title).toBeInTheDocument();
});
