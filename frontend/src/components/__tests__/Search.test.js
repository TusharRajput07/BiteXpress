import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockData from "../Mock_Data/MockResList.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

// mock fetch (fake) function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

describe("test cases for search feature on body component component", () => {
  it("should load body component with search placeHolder text", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    // querying
    const placeholderText = screen.getByPlaceholderText(
      "Search for restaurant, cuisine or a dish"
    );
    // assertion
    expect(placeholderText).toBeInTheDocument();
  });

  it("should simulate the search feature of search bar", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    // get access to all the cards on body before searching. expect them to be 8.
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    // get access to search input and search icon
    const searchInput = screen.getByTestId("searchInput");
    const searchIcon = screen.getByTestId("searchIcon");

    // fire the events of changing the input and clicking on the search icon
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchIcon);

    // get access to all the cards on the body after searching. expect them to be 2.
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
  });
});
