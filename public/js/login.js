
const showPasswordButton = document.querySelector('.show-password');
const passwordInput = document.getElementById('password');

showPasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.innerHTML = `<i class="ri-eye-off-line"></i>`;
  } else {
    passwordInput.type = 'password';
    showPasswordButton.innerHTML = `<i class="ri-eye-line"></i>`;
  }
});

