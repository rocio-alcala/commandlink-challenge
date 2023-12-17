import { screen } from "@testing-library/react";
import Input from "./Input";
import { renderWithProviders } from "./utils/test-utils";


test("should render input text given any random field type", () => {
  renderWithProviders(
    <Input
      field={{ id: "age", type: "test" }}
      errors={{}}
      register={jest.fn()}
    />
  );
  const textElement = screen.getByRole("textbox");
  expect(textElement).toBeInTheDocument;
});

test("should render input select and options given a select field type", () => {
  renderWithProviders(
    <Input
      field={{ id: "language", type: "select" }}
      errors={{}}
      register={jest.fn()}
    />
  );
  const optionElement = screen.getByRole("option");
  expect(optionElement).toBeInTheDocument;
});
