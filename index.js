document.getElementById('edit-btn').addEventListener('click', () => {
    const currentText = document.getElementById('display-message').innerText;
    const newText = prompt("Edit message:", currentText);
    if (newText) {
      document.getElementById('display-message').innerText = newText;
      localStorage.setItem('customMessage', newText); // Save locally
    }
  });
  
  // Load saved message on page load
  window.addEventListener('DOMContentLoaded', () => {
    const savedText = localStorage.getItem('customMessage');
    if (savedText) document.getElementById('display-message').innerText = savedText;
  });