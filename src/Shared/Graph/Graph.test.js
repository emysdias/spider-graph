import React from "react";
import { render } from "@testing-library/react";
import Graph from "./Graph";

describe("Graph function", () => {
  it("should return the correct order of dependencies", () => {
    const dependencies = {
      A: ["E", "C"],
      B: ["A"],
      C: [],
      D: ["A"],
      E: [],
    };

    const expectedOrder = "E, C, A, B, D";

    const { getByTestId } = render(
      <div data-testid="graph-test">{Graph(dependencies)}</div>
    );

    expect(getByTestId("graph-test")).toHaveTextContent(expectedOrder);
  });
});
