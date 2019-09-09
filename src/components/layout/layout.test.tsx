import React from "react";
import Layout from "./layout";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<Layout>My App</Layout>);
  expect(asFragment()).toMatchSnapshot();
});
