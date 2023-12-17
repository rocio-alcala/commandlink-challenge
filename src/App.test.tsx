import { screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { renderWithProviders } from "./utils/test-utils";

test("renders form header", () => {
  renderWithProviders(<App />);
  const headerImageElement = screen.getByRole("img");
  expect(headerImageElement).toBeInTheDocument();
});
