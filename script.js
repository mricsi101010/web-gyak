document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let form = e.target;
  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const model = form.model.value.trim();
  const message = form.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (id, condition) => {
    const field = form.querySelector(`#${id}`);
    if (!condition) {
      field.classList.add('is-invalid');
      valid = false;
    } else {
      field.classList.remove('is-invalid');
    }
  };

  validateField('name', name.length >= 10);
  validateField('email', emailRegex.test(email));
  validateField('phone', phone.length > 0);
  validateField('model', model.length >= 10);
  validateField('message', message.length >= 10);

  if (valid) {
    alert("Köszönjük, hogy kapcsolatba lépett velünk!");
    form.reset();
  }
});
