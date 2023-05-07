import React from "react";
import { render } from "@testing-library/react";
import Graph from "./Graph";

describe("Graph function", () => {
  it("should return the correct order of dependencies", () => {
    const dependencies = {
      A: ["B"],
      B: ["C"],
      C: ["D"],
      D: [],
      E: ["A"],
    };

    const expectedOrder = "D, C, B, A, E";

    const { getByTestId } = render(
      <div data-testid="graph-test">{Graph(dependencies)}</div>
    );

    expect(getByTestId("graph-test")).toHaveTextContent(expectedOrder);
  });

  it("should return the correct order of dependencies", () => {
    const dependencies = {
      A: ["B", "C"],
      B: [],
      C: [],
      D: ["E"],
      E: [],
    };

    const expectedOrder = "B, C, A, E, D";

    const { getByTestId } = render(
      <div data-testid="graph-test">{Graph(dependencies)}</div>
    );

    expect(getByTestId("graph-test")).toHaveTextContent(expectedOrder);
  });

  it("should return the correct order of dependencies", () => {
    const dependencies = {
      A: [],
      B: [],
      C: ["A", "B", "D"],
      D: [],
      E: ["A"],
    };

    const expectedOrder = "A, B, D, C, E";

    const { getByTestId } = render(
      <div data-testid="graph-test">{Graph(dependencies)}</div>
    );

    expect(getByTestId("graph-test")).toHaveTextContent(expectedOrder);
  });
});
