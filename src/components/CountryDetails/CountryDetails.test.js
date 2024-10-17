import { render, screen, waitFor } from "@testing-library/react";
import CountryDetails from "./CountryDetails";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders Country Details", () => {
  //dades simulades del pais
  const pais = {
    name: "Spain",
    flags: "https://restcountries.com/data/esp.svg",
    region: "Europe",
    capital: "Madrid",
    population: 46438422,
    timezones: ["UTC", "UTC+1"],
  };

  //Renderitza el component amb BrowserRouter per l'ús de Link
  render(
    <BrowserRouter>
      <CountryDetails country={pais} />
    </BrowserRouter>
  );

  //Esperar a que les dades del pais estiguin al document + verificar que hi són
  waitFor(() => expect(screen.getByText("Spain")).toBeInTheDocument());
  waitFor(() => expect(screen.getByText("Europe")).toBeInTheDocument());
  waitFor(() => expect(screen.getByText("Madrid")).toBeInTheDocument());
  waitFor(() => expect(screen.getByText("46438422")).toBeInTheDocument());
  waitFor(() => expect(screen.getByText("UTC")).toBeInTheDocument());
  waitFor(() => expect(screen.getByText("UTC+1")).toBeInTheDocument());
});

test("renders message when there are no countries", () => {
  render(
    <BrowserRouter>
      <CountryDetails country={null} />
    </BrowserRouter>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
