import {
  fetchAllCountries,
  searchCountryByName,
  filterCountriesByRegion,
} from "./fetchCountries";
import { ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_REGION } from "./endpoints";

//Mock funció fetch
global.fetch = jest.fn();
describe("API calls", () => {
  afterEach(() => {
    jest.clearAllMocks(); //netejar mocks post proves
  });

  test("fetchAllCountries should fetch from ALL_COUNTRIES endpoint", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce([]), // Simular repsosta buida
    });

    const result = await fetchAllCountries();
    expect(fetch).toHaveBeenCalledWith(ALL_COUNTRIES);
    expect(result).toEqual([]); // Verificar resultat
  });

  test("searchCountryByName should fetch from SEARCH_BY_NAME endpoint", async () => {
    const countryName = "Spain";
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce([]),
    });

    const result = await searchCountryByName(countryName);
    expect(fetch).toHaveBeenCalledWith(SEARCH_BY_NAME(countryName));
    expect(result).toEqual([]);
  });

  test("filterCountriesByRegion should fetch from FILTER_BY_REGION endpoint", async () => {
    const region = "Europe";
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce([]),
    });

    const result = await filterCountriesByRegion(region);
    expect(fetch).toHaveBeenCalledWith(FILTER_BY_REGION(region));
    expect(result).toEqual([]);
  });

  test("fetchCountries should handle fetch error", async () => {
    fetch.mockResolvedValueOnce({ ok: false }); // Simular resposta error

    const result = await fetchAllCountries(ALL_COUNTRIES);
    expect(fetch).toHaveBeenCalledWith(ALL_COUNTRIES);
    expect(result).toEqual([]); // Verificar retorn d'array bui en cas d'error
  });
});
