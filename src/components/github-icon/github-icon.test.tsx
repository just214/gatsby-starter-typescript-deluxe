import React from "react";
import GitHubIcon from "./github-icon";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<GitHubIcon />);
  expect(asFragment()).toMatchSnapshot();
});
