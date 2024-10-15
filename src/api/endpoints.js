const BASE_URL = "https://restcountries.com/v3.1";

export const ALL_COUNTRIES = `${BASE_URL}/all`;
export const SEARCH_BY_NAME = (name) => `${BASE_URL}/name/${name}`;
export const FILTER_BY_REGION = (region) => `${BASE_URL}/regio/${region}`;
