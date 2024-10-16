import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";

import "@testing-library/jest-dom/extend-expect";

test("call onSearch with the inputs values", () => {
  //crear mock per la funció onSearch
  const onSearchMock = jest.fn();

  //Renderitzar el component
  render(<Searchbar onSearch={onSearchMock} />);

  //buscarels inputs
  const countryInput = screen.getByPlaceholderText("Search by country name...");
  const capitalInput = screen.getByPlaceholderText("Search by capital...");
  const languageInput = screen.getByPlaceholderText("Search by language...");

  //simular l'input de l'usuari
  fireEvent.change(countryInput, { target: { value: "Spain" } });
  fireEvent.change(capitalInput, { target: { value: "Madrid" } });
  fireEvent.change(languageInput, { target: { value: "Spanish" } });

  //Simular el submit del formulari
  fireEvent.submit(screen.getByRole("button", { name: /search/i }));

  //verificar que la funció onSearch ha estat cridada amb el valor de l'input
  expect(onSearchMock).toHaveBeenCalledWith({
    countryName: "Spain",
    capital: "Madrid",
    language: "Spanish",
  });
});
