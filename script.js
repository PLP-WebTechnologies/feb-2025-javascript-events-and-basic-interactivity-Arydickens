// Button click: Change color and text
const colorButton = document.getElementById('colorChangeButton');
colorButton.addEventListener('click', () => {
  colorButton.classList.toggle('changed');
  colorButton.textContent = colorButton.classList.contains('changed')
    ? 'Color Changed!'
    : 'Click to Change Color';
});

// Secret double click
const secretButton = document.getElementById('secretButton');
const secretMessage = document.getElementById('secretMessage');
secretButton.addEventListener('dblclick', () => {
  secretMessage.classList.toggle('hidden');
});

// Toggle sign-up form
const toggleButton = document.getElementById('toggleSignup');
const signupForm = document.getElementById('signupForm');
toggleButton.addEventListener('click', () => {
  signupForm.classList.toggle('hidden');
});

// Form validation
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = /\S+@\S+\.\S+/.test(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;

  if (!emailValid) {
    feedback.textContent = 'Invalid email format.';
    feedback.style.color = 'red';
  } else if (!passwordValid) {
    feedback.textContent = 'Password must be at least 8 characters.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Form submitted successfully!';
    feedback.style.color = 'green';
  }
});

emailInput.addEventListener('input', () => {
  feedback.textContent = /\S+@\S+\.\S+/.test(emailInput.value) ? '' : 'Invalid email format';
  feedback.style.color = 'red';
});

passwordInput.addEventListener('input', () => {
  feedback.textContent = passwordInput.value.length >= 8 ? '' : 'Password too short';
  feedback.style.color = 'red';
});
