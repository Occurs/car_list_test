
import React from "react";
import renderer from "react-test-renderer";
import EmptyListItem from "pages/CarsList/EmptyListItem";

describe("Footer Component", () => {
  test("snapshot", () => {
    const component = renderer.create(<EmptyListItem />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
