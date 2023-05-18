const showAlert = (message, status) => {
  const alertContainer = document.querySelector('.alert-container');
  alertContainer.textContent = message;
  alertContainer.classList.remove('success', 'failed');

  const alertClass = status === 'success' ? 'success' : 'failed';
  alertContainer.classList.add(alertClass);
  alertContainer.classList.add('alert-visible');
  alertContainer.style.display = 'block';

  setTimeout(() => {
    alertContainer.classList.remove('alert-visible');
  }, 5000);
};

export default showAlert;
