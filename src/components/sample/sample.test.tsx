import React from "react";
import Sample from "./sample";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Sample name="Bob" />);
  expect(asFragment()).toMatchSnapshot();
});
