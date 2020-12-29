import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../../node_modules/pnotify/dist/es/PNotifyButtons.js';
import '../../node_modules/pnotify/dist/PNotifyBrightTheme.css';

// Configuring PNotify Stack
const bottomRightStack = {
  dir1: 'up',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  push: 'top',
  context: document.body,
};

export default function showError(errorMessage) {
  PNotify.error({
    text: errorMessage,
    title: 'Oops!',
    delay: 4000,
    stack: bottomRightStack,
  });
}
