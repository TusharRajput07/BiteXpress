import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MockData from "../Mock_Data/MockRestaurantCard.json";

test("should load restaurant card of 'Burger King' (props data)", () => {
  render(<RestaurantCard resData={MockData} />);
  // querying
  const name = screen.getByText("Burger King");
  //assertion
  expect(name).toBeInTheDocument();
});
