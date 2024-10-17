import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react";
import Home from "./Home";
import { fetchAllCountries } from "../../api/fetchCountries";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

//simulació funcions API
jest.mock("../../api/fetchCountries");

//simulació array països
const mockCountries = [
  {
    name: { common: "Spain" },
    region: "Europe",
    capital: ["Madrid"],
    population: 46438422,
    flags: { svg: "https://restcountries.com/data/esp.svg" },
    languages: { spa: "Spanish" },
  },
  {
    name: { common: "France" },
    region: "Europe",
    capital: ["Paris"],
    population: 67348000,
    flags: { svg: "https://restcountries.com/data/fra.svg" },
    languages: { fra: "French" },
  },
];

//agrupar proves relacionades
describe("Home Component", () => {
  //netejar els mocks abans de cada prova
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and display countries in original render", async () => {
    //simulació funció fetchAllCountries
    fetchAllCountries.mockResolvedValue(mockCountries);

    await act(async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });

    //esperar a que les dades dels països estiguin al document
    await waitFor(() => expect(fetchAllCountries).toHaveBeenCalledTimes(1));

    //verificar que els noms dels països apareixen al document
    waitFor(() => expect(screen.getByText("Spain").toBeInTheDocument()));
    waitFor(() => expect(screen.getByText("France").toBeInTheDocument()));
  });

  test("Filters countries by search input", async () => {
    fetchAllCountries.mockResolvedValue(mockCountries);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    //esperar a que les dades estiguin al document
    await waitFor(() => expect(fetchAllCountries).toHaveBeenCalledTimes(1));

    //Simulació canvi input
    fireEvent.change(screen.getByPlaceholderText("Search by country name..."), {
      target: { value: "Spain" },
    });
  });
});
