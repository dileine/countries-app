import { ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_REGION } from "./endpoints";

export const fetchCountries = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Error fetching countries from: ${endpoint}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchAllCountries = () => fetchCountries(ALL_COUNTRIES);

export const searchCountryByName = (name) =>
  fetchCountries(SEARCH_BY_NAME(name));

// Filter countries by region
export const filterCountriesByRegion = (region) =>
  fetchCountries(FILTER_BY_REGION(region));
