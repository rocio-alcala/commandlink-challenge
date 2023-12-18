import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "./utils/test-utils";
import ThankYouPage from "./ThankYouPage";


test("renders loaded form state", () => {
  renderWithProviders(<ThankYouPage setIsModalOpen={jest.fn()} />, {
    preloadedState: { form: { lastName: "last name test" } },
  });
  const lastNameElement = screen.getByText(/last name test/i);
  expect(lastNameElement).toBeInTheDocument();
});
