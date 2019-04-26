import React from "react";
import renderer from "react-test-renderer";
import Footer from "../footer";
import "jest-styled-components";

describe("Footer", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
