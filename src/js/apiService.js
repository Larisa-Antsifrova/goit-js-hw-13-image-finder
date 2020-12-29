import showError from './notifications.js';

const apiKey = '19692208-b21bb8a95ceb217f14156bc9c';
const BASE_URL = 'https://pixabay.com/api/';
const errorMessage = 'No matches were found! Try again :)';

// Methods to handle search queries
export default {
  searchQuery: '',
  pageNumber: 1,

  fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        if (!hits.length) {
          return Promise.reject(errorMessage);
        }
        this.incrementPage();
        return hits;
      });
  },
  resetPage() {
    this.pageNumber = 1;
  },
  incrementPage() {
    this.pageNumber += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  },
};
