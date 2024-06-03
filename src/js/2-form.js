const form = document.querySelector('.feedback-form');
const input = document.querySelector('#input');
const textarea = document.querySelector('#textarea');
const feedbackFormState = 'feedback-form-state';
const formDataString = localStorage.getItem(feedbackFormState);
const formData = formDataString
  ? JSON.parse(formDataString) //Навіщо спочатку задавати масив з пустими значеннями. Тут це робиться, якщо локальне сховище пусте.
  : { email: '', message: '' }; //Якщо це не вірно, то інший варіант закоментований.
input.value = formData.email;
textarea.value = formData.message;

// const form = document.querySelector('.feedback-form');
// const input = document.querySelector('#input');
// const textarea = document.querySelector('#textarea');
// const feedbackFormState = 'feedback-form-state';
// const formData = { email: "", message: "" };
// const formDataString = localStorage.getItem(feedbackFormState);
// if (formDataString !== null) {
//   formData.email = JSON.parse(formDataString).email;
//   formData.message = JSON.parse(formDataString).message;
// }
// input.value = formData.email;
// textarea.value = formData.message;

form.addEventListener('input', event => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  const json = JSON.stringify(formData);
  localStorage.setItem(feedbackFormState, json);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(feedbackFormState);
  form.reset();
});