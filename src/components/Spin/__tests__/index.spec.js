import { render } from '@testing-library/react';
import Spin from '../index';

describe('Spin', () => {
  test('should render properly', () => {
    const { getByTestId } = render(<Spin />);
    const spinElement = getByTestId("spin");
    expect(spinElement).toBeInTheDocument();
    expect(spinElement).toHaveClass("spin");
  })
});
