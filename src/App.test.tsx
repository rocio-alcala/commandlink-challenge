import { screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { renderWithProviders } from "./utils/test-utils";

test("renders learn react link", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/command link/i);
  expect(linkElement).toBeInTheDocument();
});
