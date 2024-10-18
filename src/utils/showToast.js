import Toastify from 'toastify-js';

export const showToast = (content) => {
  Toastify({
    text: typeof content === 'string' ? content : undefined,
    node: typeof content === 'object' ? content : undefined,
    duration: 6000,
    close: true,
    gravity: "bottom",
    position: "center",
    stopOnFocus: true,
    offset: { y: 50 },
    className: "form-submit-toast",
  }).showToast();
};