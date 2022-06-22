const BASE_URL = 'https://api.covid19api.com';

export function fetchCountries() {
  return fetch(`${BASE_URL}/summary`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    }
  );
}