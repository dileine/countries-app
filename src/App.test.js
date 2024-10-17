import { screen, render, waitFor } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import { fetchAllCountries } from "./api/fetchCountries";

jest.mock("./api/fetchCountries");

describe("App Content", () => {
  test("render Home at root route", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/countries of the world/i)).toBeInTheDocument();
    });
  });

  test("render country detail at /country/:name route", async () => {
    fetchAllCountries.mockResolvedValueOnce([
      {
        name: { common: "Spain" },
        capital: ["Madrid"],
        languages: { esp: "Spanish" },
      },
    ]);

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Spain")).toBeInTheDocument();
    });
  });
});
