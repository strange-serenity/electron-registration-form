document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    let isValid = true;
  
    // Очищення попередніх повідомлень про помилки
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
    document.getElementById('success-message').textContent = '';
  
    // Валідація email
    if (!email) {
      document.getElementById('email-error').textContent = 'Будь ласка, введіть email.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById('email-error').textContent = 'Некоректний email.';
      isValid = false;
    }
  
    // Валідація пароля
    if (!password) {
      document.getElementById('password-error').textContent = 'Будь ласка, введіть пароль.';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('password-error').textContent = 'Пароль повинен бути не менше 6 символів.';
      isValid = false;
    }
  
    // Перевірка підтвердження пароля
    if (password !== confirmPassword) {
      document.getElementById('confirm-password-error').textContent = 'Паролі не співпадають.';
      isValid = false;
    }
  
    // Якщо всі поля валідні, показуємо повідомлення про успішну реєстрацію
    if (isValid) {
      document.getElementById('success-message').textContent = 'Реєстрація пройшла успішно!';
    }
  });
  