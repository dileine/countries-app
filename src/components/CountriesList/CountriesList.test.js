import { render, screen } from "@testing-library/react";
import CountriesList from "./CountriesList";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom/extend-expect";

test("renders a list of countries", async () => {
  //dades simulades de països
  const countries = [
    { name: { common: "Spain" }, cca3: "ESP" },
    { name: { common: "France" }, cca3: "FRA" },
    { name: { common: "Italy" }, cca3: "ITA" },
  ];

  //Renderitza el component amb browserRouter per l'ús de Link
  await act(async () => {
    render(
      <BrowserRouter>
        <CountriesList countries={countries} />
      </BrowserRouter>
    );
  });

  //verificar que els noms apareixen al document
  expect(screen.getByText("Spain")).toBeInTheDocument();
  expect(screen.getByText("France")).toBeInTheDocument();
  expect(screen.getByText("Italy")).toBeInTheDocument();
});

test("renders message when there are no countries", () => {
  render(
    <BrowserRouter>
      <CountriesList countries={[]} />
    </BrowserRouter>
  );

  expect(screen.getByText("No countries available")).toBeInTheDocument();
});
