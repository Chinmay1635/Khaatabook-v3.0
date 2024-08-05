
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');


    // Validate full name
    if (name.value.trim() === '') {
      showError(name, 'Full name is required');
    }

    // Validate email
    if (!validateEmail(email.value)) {
      showError(email, 'Invalid email address');
    }

    // Validate password
    if (password.value.length < 8) {
      showError(password, 'Password must be at least 8 characters');
    }

    // Validate confirm password
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, 'Passwords do not match');
    }

    

    // Check if there are any errors
    if (document.querySelectorAll('.error-message').length === 0) {
      // If no errors, submit the form
      this.submit();
    }
  });

  function showError(element, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.innerText = message;
    element.parentNode.insertBefore(error, element.nextSibling);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }


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

  var typed = new Typed('.element', {
    strings: ['Join Khaatabook and start managing your expenses today!'],
    typeSpeed: 50,
    
    backDelay:1000,
  });
  