import { ALL_COUNTRIES, SEARCH_BY_NAME, FILTER_BY_REGION } from "./endpoints";

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(ALL_COUNTRIES);
    if (!response.ok) throw new Error("Error fetching countries");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchCountryByName = async (name) => {
  try {
    const response = await fetch(SEARCH_BY_NAME(name));
    if (!response.ok) throw new Error(`Error fetching country by ${name}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const filterCountriesByRegion = async (region) => {
  try {
    const response = await fetch(FILTER_BY_REGION(region));
    if (!response.ok)
      throw new Error(`Error fetching countries for region: ${region}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
