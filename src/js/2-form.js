const localStorageKey = 'feedback-form-state';
const initialData = {
  email: '',
  message: '',
}
let formData = initialData;
const form = document.querySelector('.feedback-form');
const error = document.querySelector('.error');

const localFormData = localStorage.getItem(localStorageKey);
if (localFormData) {
  formData = JSON.parse(localFormData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

const onInput = (event) => {
  error.innerHTML = '';
  const field = event.target.name;
  formData[field] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('input', onInput);

const onSubmit = (event) => {
  event.preventDefault();
    
  if (!formData.email || !formData.message) {
    error.innerHTML = 'Fill please all fields';
    return;
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData = initialData;
};

form.addEventListener('submit', onSubmit);
