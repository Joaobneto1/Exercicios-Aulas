/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  const heading = screen.getByRole("heading")
  expect(heading).toHaveTextContent(/App Router/i);
});
