// TODO: Figure out why this test is failing.

import React from "react";
import { GithubIcon } from "../github-icon";
import { render, cleanup } from "@testing-library/react";
import * as Gatsby from "gatsby";
const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => {
    return {
      icon: {
        childImageSharp: {
          fixed: "gatsby-logo.png",
        },
      },
    };
  });
});

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<GithubIcon />);
  expect(asFragment()).toMatchSnapshot();
});
