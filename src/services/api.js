const BASE_URL = 'https://api.covid19api.com/summary';

export default class CovidApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImg() {
    return fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&`,
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      };
      return response.json()
    })
      .then(( data ) => {
        this.incrementPage();
        if (data.length === 0) {
          throw new Error('Information not found');
                };
        return data;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}