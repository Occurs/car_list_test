import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom';
import Page404 from "pages/Page404/Page404";
import routes from "router/routes";

describe("Page404 Component", () => {
  test("snapshot", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={['error-route']}>
        <Page404 />
      </MemoryRouter>
      );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
