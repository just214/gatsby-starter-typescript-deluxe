import React from "react";
import { Code } from "../code";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<Code>const gatsby = "awesome"</Code>);
  expect(asFragment()).toMatchSnapshot();
});
