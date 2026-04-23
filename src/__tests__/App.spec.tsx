import { App } from "../App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    screen.getByText("Supplier Directory");
  });
});
