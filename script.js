const envelope = document.getElementById('envelope');
const seal = document.querySelector('.seal');
const letterModal = document.getElementById('letterModal');
const closeBtn = document.getElementById('closeBtn');

let isOpen = false;

function checkPassword() {
  const correctPassword = 'bossing';
  const input = document.getElementById('password-input').value;
  const error = document.getElementById('error-msg');

  if (input.toLowerCase() === correctPassword.toLowerCase()) {
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('envelope-container').style.display = 'flex';
  } else {
    error.textContent = 'Mali man HAHAHHAHA lowercase lahat hehe';
  }
}

envelope.addEventListener('click', () => {
  if (!isOpen) {
    envelope.classList.add('open');
    seal.style.opacity = '0';
    letterModal.classList.add('show');
    isOpen = true;
  }
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  envelope.classList.remove('open');
  seal.style.opacity = '1';
  letterModal.classList.remove('show');
  isOpen = false;
});
