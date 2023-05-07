import { render, screen, fireEvent } from "@testing-library/react";
import BoxWithImage from "./BoxWithImage";

describe("BoxWithImage component", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    render(
      <BoxWithImage
        onClick={mockOnClick}
        imagePath="imagePath"
        buttonText="buttonText"
        titleText="titleText"
      />
    );
  });

  it("renders the component with image, title and button", () => {
    const image = screen.getByAltText("spider");
    const title = screen.getByText("buttonText");
    const button = screen.getByText("titleText");

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("calls onClick function when button is clicked", () => {
    const button = screen.getByText("buttonText");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
