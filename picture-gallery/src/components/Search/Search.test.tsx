import {render, screen, fireEvent} from '@testing-library/react';
import Search from './index';

describe('Search', () => {
  test('should render input field with button', () => {
    const mockFn = jest.fn();
    render(<Search handleSearch={mockFn}/>);
    const input = screen.getByPlaceholderText(/Search Images/i);
    const searchButton = screen.getByText(/Search/i);
    expect(input).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});