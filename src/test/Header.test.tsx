import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import Header from "components/Header/Header";
import routes from "router/routes";

describe("Header Component", () => {
  test("snapshot", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[routes.carsList]}>
        <Header />
      </MemoryRouter>
      );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
