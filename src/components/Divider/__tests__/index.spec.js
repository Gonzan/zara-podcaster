import { render } from '@testing-library/react';
import Divider from '../index';

describe('Divider', () => {
  test('should render properly', () => {
    const { getByTestId } = render(<Divider />);
    const dividerElement = getByTestId("divider");
    expect(dividerElement).toBeInTheDocument();
    expect(dividerElement).toHaveClass("divider");
  });
});
