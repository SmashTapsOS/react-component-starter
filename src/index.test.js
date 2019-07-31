import React from "react";
import MyComponent from "./index";
import renderer from "react-test-renderer";

it("renders properly", () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
