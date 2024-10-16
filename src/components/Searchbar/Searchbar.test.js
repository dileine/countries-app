import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "./Searchbar";

import "@testing-library/jest-dom/extend-expect";

test("call onSearch with the input value", () => {
  //crear mock per la funció onSearch
  const onSearchMock = jest.fn();

  //Renderitzar el component
  render(<Searchbar onSearch={onSearchMock} />);

  //buscar l'input
  const input = screen.getByPlaceholderText("Search country...");

  //simular l'input de l'usuari
  fireEvent.change(input, { target: { value: "Spain" } });

  //verificar que la funció onSearch ha estat cridada amb el valor de l'input
  expect(onSearchMock).toHaveBeenCalledWith("Spain");
});
