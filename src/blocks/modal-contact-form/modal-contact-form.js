import ready from 'Utils/documentReady.js';

ready(function () {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  const submit = document.getElementById('submit');

  function checkParams() {
    if (name.value.length != 0 && email.value.length >= 6 && phone.value.length >= 10) {
      submit.removeAttribute('disabled');
    } else {
      submit.setAttribute('disabled', 'disabled');
    }
  }

  name.addEventListener('keyup', function () {
    checkParams();
  });
  email.addEventListener('keyup', function () {
    checkParams();
  });
  phone.addEventListener('keyup', function () {
    checkParams();
  });
});
