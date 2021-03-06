// Functions handling markup
function markupRender(markup, place) {
  place.insertAdjacentHTML('beforeend', markup);
}

function clearGallery(place) {
  place.innerHTML = '';
}

export default { markupRender, clearGallery };
