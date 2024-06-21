
const personalInfoForm = document.getElementById('personal-info-form');
const accountInfoForm = document.getElementById('account-info-form');


function validateField(field, fieldType) {
  if (fieldType === 'text' || fieldType === 'email' || fieldType === 'tel') {
    if (field.value.trim() === '') {
      return false;
    }
  } else if (fieldType === 'password') {
    if (field.value.length < 8) {
      return false;
    }
  } else if (fieldType === 'elect') {
    if (field.value === '') {
      return false;
    }
  }
  return true;
}

function validateDateOfBirth(dob) {
  const dobParts = dob.value.split('-');
  const day = parseInt(dobParts[2], 10);
  const month = parseInt(dobParts[1], 10);
  const year = parseInt(dobParts[0], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  if (day < 1 || day > 31) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  if (year < 1900 || year > 2100) {
    return false;
  }

  return true;
}


function validatePasswordMatch(password, confirmPassword) {
  if (password.value!== confirmPassword.value) {
    return false;
  }
  return true;
}


personalInfoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const dob = document.getElementById('dob');
  const gender = document.getElementById('gender');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  if (!validateField(firstName, 'text') ||!validateField(lastName, 'text') ||!validateDateOfBirth(dob) ||!validateField(gender, 'elect') ||!validateField(email, 'email') ||!validateField(phone, 'tel')) {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }


  personalInfoForm.submit();
});

accountInfoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  if (!validateField(username, 'text') ||!validateField(password, 'password') ||!validateField(confirmPassword, 'password') ||!validatePasswordMatch(password, confirmPassword)) {
    alert('Por favor, completa todos los campos requeridos.');
    return;
  }


  accountInfoForm.submit();
});


