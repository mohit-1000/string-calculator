import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("displays an error when input is invalid", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter numbers/i);
    const button = screen.getByText(/Calculate/i);
    fireEvent.change(input, { target: { value: "abc" } });
    fireEvent.click(button);
  });

  test("handles empty input gracefully", () => {
    render(<App />);
    const button = screen.getByText(/Calculate/i);
    fireEvent.click(button);

    const errorMessage = screen.getByText(/Please enter numbers/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("clears input and results after reset", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter numbers/i);
    const button = screen.getByText(/Calculate/i);
    const resetButton = screen.getByText(/Reset/i);

    fireEvent.change(input, { target: { value: "4,5" } });
    fireEvent.click(button);
    fireEvent.click(resetButton);
    expect(input.value).toBe("");
    const result = screen.queryByText(/Result:/i);
    expect(result).toBeInTheDocument();
  });
});
