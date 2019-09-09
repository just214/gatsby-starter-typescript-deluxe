import React from "react";
import Footer from "./footer";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
