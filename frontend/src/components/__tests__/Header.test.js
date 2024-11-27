import "@testing-library/jest-dom";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import reduxStore from "../../utils/reduxStore";
import { BrowserRouter } from "react-router-dom";

test("should load with text BiteXpress", () => {
  // loading the component
  render(
    <BrowserRouter>
      <Provider store={reduxStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // querying
  const brandText = screen.getByText("BiteXpress");
  // assertion
  expect(brandText).toBeInTheDocument();
});
