import React from "react";
import SEO from "./seo";
import { render, cleanup } from "@testing-library/react";
import { useStaticQuery } from "../../../__mocks__/gatsby";

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(({ render }) =>
    render({
      data: {
        site: {
          siteMetadata: {
            title: "Test",
            description: "Test",
            author: "@test",
          },
        },
      },
    }),
  );
});

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<SEO />);
  expect(asFragment()).toMatchSnapshot();
});
