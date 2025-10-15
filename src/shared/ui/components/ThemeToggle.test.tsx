import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";

jest.mock("shared/lib", () => ({
  st: () => "8px",
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

// 💡 Мокаем сам action
jest.mock("entities/theme", () => ({
  switchTheme: jest.fn(() => ({ type: "theme/switch" })),
}));

describe("ThemeToggle integration", () => {
  const mockDispatch = jest.fn();
  const { useAppDispatch, useAppSelector } = require("shared/lib");

  beforeEach(() => {
    jest.clearAllMocks();
    useAppDispatch.mockReturnValue(mockDispatch);
  });

  test("отображает ☀️ при светлой теме", () => {
    useAppSelector.mockReturnValue("light");

    render(<ThemeToggle />);

    expect(screen.getByText("☀️")).toBeInTheDocument();
  });

  test("отображает 🌑 при тёмной теме", () => {
    useAppSelector.mockReturnValue("dark");

    render(<ThemeToggle />);

    expect(screen.getByText("🌑")).toBeInTheDocument();
  });

  test("вызывает dispatch при клике", () => {
    useAppSelector.mockReturnValue("light");

    render(<ThemeToggle />);

    fireEvent.click(screen.getByRole("button"));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
