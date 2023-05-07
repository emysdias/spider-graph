import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Result from "./Result";

describe("Result Page", () => {
  it("redirects to home page when button is clicked", () => {
    const { container } = render(
      <BrowserRouter>
        <Result />
      </BrowserRouter>
    );
    const button = container.querySelector("button");
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/home");
  });
});
