// Imports of necessry resources
import refs from './refs.js';
import galleryCardTpl from '../templates/galleryItem.hbs';
import pixabayApi from './apiService.js';
import markupApi from './markup.js';
import loadMoreBtnApi from './loadMoreBtn.js';
import showError from './notifications.js';

console.log(showError);
// Destructuring
const { galleryListRef, searchFormRef, loadMoreBtnRef } = refs;
const { markupRender, clearGallery } = markupApi;
const errorMessage = 'No matches were found! Check your spelling :)';

// Hiding the Load more button untill a user gets the first batch of images
loadMoreBtnApi.hide();

// Adding event listener to the form
searchFormRef.addEventListener('submit', onImageSearch);
// Adding event listener to the Load more button
loadMoreBtnRef.addEventListener('click', onLoadMore);

// Functions
//Funtion that handles the fetched data: the data's markup is created and inserted into DOM. The page is scrolled. The Load more button is shown.
function showSearchResult() {
  pixabayApi
    .fetchImages()
    .then(dataArray => galleryCardTpl(dataArray))
    .then(markup => {
      markupRender(markup, galleryListRef);
      // The condition to prevent the page from scrolling on the very first batch of images
      if (pixabayApi.pageNumber > 2) {
        // Method window.scrollTo() did not work quite the way I expected, so I used another method mentioned in MDN
        window.scrollBy({
          // The page is scrolled by the height of the window minus the height of the search bar
          top: window.innerHeight - 110,
          behavior: 'smooth',
        });
      }
      loadMoreBtnApi.show();
      loadMoreBtnApi.enable();
    })
    .catch(er => {
      loadMoreBtnApi.hide();
      showError(er);
    });
}

// Funtion that handles search form submit
function onImageSearch(event) {
  event.preventDefault();

  pixabayApi.query = searchFormRef.elements.query.value;

  clearGallery(galleryListRef);
  pixabayApi.resetPage();

  showSearchResult();

  searchFormRef.reset();
}

// Funtion that handles a click on the Load more button
function onLoadMore() {
  loadMoreBtnApi.disable();
  showSearchResult();
}
