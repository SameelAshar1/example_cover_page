const form = document.getElementById("signupForm");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
const pageContent = document.getElementById("pageContent");

const usernameInput = document.getElementById("Username");
const passwordInput = document.getElementById("Password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Regex
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validate function
function validateInputs() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (!usernameRegex.test(username)) {
    alert("Username must be 3–16 characters and start with a letter.");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
    );
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateInputs()) {
    popup.style.display = "block";
    pageContent.classList.add("blur");
    document.body.classList.add("show-overlay");
  }
});

// Close popup
closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
  pageContent.classList.remove("blur");
  document.body.classList.remove("show-overlay");
  form.reset();
});

// Real-time password feedback
passwordInput.addEventListener("keyup", () => {
  const isValid = passwordRegex.test(passwordInput.value);
  passwordInput.style.borderBottom =
    isValid ? "2px solid green" : "2px solid red";
});
