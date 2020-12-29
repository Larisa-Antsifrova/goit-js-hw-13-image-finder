import refs from '../js/refs.js';
const basicLightbox = require('basiclightbox');

const {
  galleryListRef,
  modalContainer,
  modalCloseBtn,
  modalImageElement,
  overlay,
} = refs;

// Adding event listeners
galleryListRef.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Functions
// Function that is invoked when the modal is open
function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originalImageSource = event.target.dataset.source;
  modalImageElement.setAttribute('src', originalImageSource);
  modalContainer.classList.add('is-open');

  window.addEventListener('keydown', onPressEscape);
}

// Function that is invoked when the modal is closed
function closeModal() {
  modalImageElement.setAttribute('src', '');
  modalContainer.classList.remove('is-open');

  // Deleting event listeners from window
  window.removeEventListener('keydown', onPressEscape);
}

// Function that closes the modal on Escape key
function onPressEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
