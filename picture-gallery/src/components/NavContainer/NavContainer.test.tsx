import {render, screen, fireEvent} from '@testing-library/react';
import PopularsList from './index';

describe('Popular list Navigation', () => {
  test('should render with title populars', () => {
    let populars = ["Festivals"];
    const mockFn = jest.fn();
    render(<PopularsList populars={populars} onSearch={mockFn}/>);
    const title = screen.getByText(/Popular/i);
    const navTitle = screen.getByText(/Festivals/i);
    expect(title).toBeInTheDocument();
    expect(navTitle).toBeInTheDocument();
    fireEvent.click(navTitle);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});