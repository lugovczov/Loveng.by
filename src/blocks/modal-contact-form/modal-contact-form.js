import ready from 'Utils/documentReady.js';

ready(function () {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const submit = document.getElementById('submit');
  const toolTip = document.getElementById('toolTip');

  function checkParams() {
    if (name.value.length != 0 && email.value.length >= 6) {
      submit.removeAttribute('disabled');
      toolTip.removeAttribute('data-original-title');
    } else {
      submit.setAttribute('disabled', 'disabled');
      toolTip.setAttribute('data-original-title', 'Имя и E-mail являются обязательными параметрами');
    }
  }

  name.addEventListener('keyup', function () {
    checkParams();
  });
  email.addEventListener('keyup', function () {
    checkParams();
  });


  $('[data-toggle="tooltip"]').tooltip();


  //E-mail Ajax Send
  $("#contactForm").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Спасибо, наши специалисты свяжутся с Вами в ближайшее время");
      $('#modalContactForm').modal('hide')
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
