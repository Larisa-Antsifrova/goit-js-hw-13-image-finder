const apiKey = '19692208-b21bb8a95ceb217f14156bc9c';
const BASE_URL = 'https://pixabay.com/api/';
const errorMessage = 'No matches were found! Try again :)';

// Methods to handle search queries
export default {
  searchQuery: '',
  pageNumber: 1,
  perPage: 12,
  totalPages: 0,
  isLastPage: false,

  fetchImages() {
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits, totalHits }) => {
        this.totalPages = Math.ceil(totalHits / this.perPage);

        // Checking if the currently fetched batch of images is the last page
        if (this.totalPages === this.pageNumber) {
          this.isLastPage = true;
        } else {
          this.isLastPage = false;
        }
        // Still, if no matches are returned by API, we will show an error that nothing was found
        if (!this.totalPages) {
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
