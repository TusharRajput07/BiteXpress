import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MockData from "../Mock_Data/MockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MockData),
  })
);

describe("test cases for cart", () => {
  it("should load the restaurant menu component with 20 recommended dish cards", async () => {
    await act(async () => {
      render(
        <Provider store={reduxStore}>
          <RestaurantMenu />
        </Provider>
      );
    });

    const dishCards = screen.getAllByTestId("foodItem");
    expect(dishCards.length).toBe(20);
  });

  it("should simulate the cart qty in the header and cart cards in cart component after clicking on the add button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={reduxStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });

    // get access of all the add buttons on the page
    const addBtns = screen.getAllByTestId("addBtn");

    // click any one add button and expect the cartQty in header to be 1
    fireEvent.click(addBtns[0]);
    expect(screen.getByTestId("cartQty")).toHaveTextContent(1);

    // doing the same one more time and expecting 2 this time
    fireEvent.click(addBtns[1]);
    expect(screen.getByTestId("cartQty")).toHaveTextContent(2);

    // get access of all the dishCards on the cart page. and expect their count to be 2 (as we've clicked on the add button twice so far)
    const cartDishCards = screen.getAllByTestId("cartCard");
    expect(cartDishCards.length).toBe(2);

    // additionally, get access to clear cart button on cart page and click on it.
    const clearCart = screen.getByTestId("clearCartBtn");
    waitFor(fireEvent.click(clearCart));

    const emptyCart = screen.getByTestId("emptyCart");
    expect(emptyCart).toBeInTheDocument();
  });
});
