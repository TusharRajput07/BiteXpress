import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("should load Contact component", () => {
  render(<Contact />);
  // querying
  const heading = screen.getByText("Get in Touch");
  // assertion
  expect(heading).toBeInTheDocument();
});
