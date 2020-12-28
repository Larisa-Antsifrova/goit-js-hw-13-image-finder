// Imports of necessry resources
import refs from './refs.js';
import galleryCardTpl from '../templates/galleryItem.hbs';
import pixabayApi from './apiService.js';
import markupApi from './markup.js';

// Destructuring
const { galleryListRef, searchFormRef, loadMoreBtnRef } = refs;
const { markupRender, clearGallery } = markupApi;

// Adding event listener to the form
searchFormRef.addEventListener('submit', onImageSearch);
// Adding event listener to the Load more button
loadMoreBtnRef.addEventListener('click', onLoadMore);

// Functions
function showSearchResult() {
  pixabayApi
    .fetchImages()
    .then(dataArray => galleryCardTpl(dataArray))
    .then(markup => {
      markupRender(markup, galleryListRef);
      window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      });
    });
}

function onImageSearch(event) {
  event.preventDefault();

  pixabayApi.query = searchFormRef.elements.query.value;

  clearGallery(galleryListRef);
  pixabayApi.resetPage();

  showSearchResult();

  searchFormRef.reset();
}

function onLoadMore() {
  showSearchResult();
}

// function fetchArticles() {
//   loadMoreBtn.disable();

//   newsService.fetchArticles().then(articles => {
//     updateArticlesMarkup(articles);
//     loadMoreBtn.show();
//     loadMoreBtn.enable();
//   });
// }
