import React from "react";
import SEO from "./seo";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<SEO />);
  expect(asFragment()).toMatchSnapshot();
});
