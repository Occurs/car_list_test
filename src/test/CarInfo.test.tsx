import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import CardInfo from "pages/CarCard/CardInfo";
import routes from "router/routes";

const props = {
  car: {
    stockNumber: 41400,
    manufacturerName: "Fiat",
    modelName: "Marea",
    mileage: {
      number: 100141,
      unit: "km",
    },
    fuelType: "Diesel",
    color: "white",
    pictureUrl: "",
  },
};

const renderComponent = () =>
  render(
    <MemoryRouter initialEntries={[routes.carsList]}>
      <CardInfo {...props} />
    </MemoryRouter>
  );

describe("CarCard Component", () => {
  test("snapshot", () => {
    const component = renderer.create(
      <MemoryRouter initialEntries={[routes.carsList]}>
        <CardInfo {...props} />
      </MemoryRouter>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("render", async () => {
    const { getByText } = renderComponent();
    getByText("Fiat Marea");
    getByText("Stock # 41400 - 100141 KM - Diesel - White");
  });
});
