const loginForm = document.getElementById('login-form');
const userDataDiv = document.getElementById('user-data');

document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('authToken');
  const userId = localStorage.getItem('userId');

  if (token && userId) {
    displayUser(userId);
  }
});


loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userId', data.id);
      displayUser(data.id);
    } else {
      console.log('Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

async function displayUser(userId) {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const userData = await response.json();

  document.getElementById('user-photo').src = userData.image;
  document.getElementById('user-name').textContent = userData.firstName + ' ' + userData.lastName;
  document.getElementById('user-email').textContent = userData.email;

  loginForm.style.display = 'none';
  userDataDiv.style.display = 'block';
}
