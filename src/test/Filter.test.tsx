import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import Filter from "pages/CarsList/Filter";
import { FiltersContext } from "context/FiltersProvider";

describe("Filter Component", () => {
  const props = {
    applyFilters: jest.fn(),
  };

  const mock = {
    colors: ["white", "red"],
    manufacturers: [
      {
        name: "Fiat",
        models: [
          {
            name: "Marea",
          },
        ],
      },
      {
        name: "Opel",
        models: [
          {
            name: "Astra",
          },
        ],
      },
    ],
  };

  test("snapshot", () => {
    const component = renderer.create(
      <FiltersContext.Provider value={mock}>
        <Filter {...props} />
      </FiltersContext.Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("click on last page button", () => {
    const { getByText } = render(
      <FiltersContext.Provider value={mock}>
        <Filter {...props} />
      </FiltersContext.Provider>
    );
    const filter = getByText("Filter");
    fireEvent.click(filter);
    expect(props.applyFilters).toHaveBeenCalledTimes(1);
    expect(props.applyFilters).toHaveBeenCalledWith({
      color: "",
      manufacturer: "",
    });
  });
});
