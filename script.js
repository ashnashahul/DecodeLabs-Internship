const passwordInput = document.getElementById('password');
const toggleBtn     = document.getElementById('toggleBtn');
const strengthLabel = document.getElementById('strengthLabel');

const chkLength  = document.getElementById('chk-length');
const chkUpper   = document.getElementById('chk-upper');
const chkLower   = document.getElementById('chk-lower');
const chkNumber  = document.getElementById('chk-number');
const chkSpecial = document.getElementById('chk-special');

toggleBtn.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = 'Show';
  }
});

passwordInput.addEventListener('input', function () {
  const val = passwordInput.value;

  const hasLength  = val.length >= 8;
  const hasUpper   = /[A-Z]/.test(val);
  const hasLower   = /[a-z]/.test(val);
  const hasNumber  = /[0-9]/.test(val);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val);

  check(chkLength,  hasLength);
  check(chkUpper,   hasUpper);
  check(chkLower,   hasLower);
  check(chkNumber,  hasNumber);
  check(chkSpecial, hasSpecial);

  const score = [hasLength, hasUpper, hasLower, hasNumber, hasSpecial]
    .filter(Boolean).length;

  updateStrength(score, val.length);
});

function check(el, passed) {
  if (passed) {
    el.classList.add('pass');
  } else {
    el.classList.remove('pass');
  }
}

function updateStrength(score, length) {
  if (length === 0) {
            strengthLabel.textContent = '--';
    strengthLabel.style.color = '#3a7a3a';
    return;
  }

  if (score <= 1) {
            strengthLabel.textContent = 'Weak';
    strengthLabel.style.color = '#ff4444';
  } else if (score === 2) {
            strengthLabel.textContent = 'Fair';
    strengthLabel.style.color = '#ff8800';
  } else if (score === 3) {
            strengthLabel.textContent = 'Good';
    strengthLabel.style.color = '#ffcc00';
  } else if (score === 4) {
            strengthLabel.textContent = 'Strong';
    strengthLabel.style.color = '#00cc33';
  } else {
            strengthLabel.textContent = 'Very Strong';
    strengthLabel.style.color = '#00ff41';
  }
}
