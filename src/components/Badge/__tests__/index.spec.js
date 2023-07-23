import { render } from '@testing-library/react';
import Badge from '../index';

describe("Given Badge component", () => {
    describe("When it is called and fully loaded", () => {
        test("Then should render the count with the primary type properly", () => {
          const propsMock = {
            count: 5,
            type: "primary"
          };

          const { getByTestId } = render(<Badge {...propsMock} />);
      
          const badgeElement = getByTestId("badge");
          expect(badgeElement).toBeInTheDocument();
          expect(badgeElement).toHaveClass("badge");
          expect(badgeElement).toHaveClass("badge--primary");
          expect(badgeElement).toHaveTextContent("5");
        });
    })
});
