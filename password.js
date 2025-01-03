const passwordField = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

// Function to generate random password
function generatePassword(length = 12) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Typing effect for the password
function typePassword(password) {
  passwordField.classList.remove("typing");
  passwordField.textContent = "";

  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < password.length) {
      passwordField.textContent += password[index];
      index++;
    } else {
      clearInterval(typingInterval);
      passwordField.classList.add("typing");
    }
  }, 100);
}

// Generate button functionality
generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword();
  typePassword(newPassword);
});

// Copy button functionality
copyBtn.addEventListener("click", () => {
  if (passwordField.textContent) {
    navigator.clipboard.writeText(passwordField.textContent).then(() => {
      alert("Password Copied to Clipboard!");
    });
  } else {
    alert("No Password to Copy!");
  }
});
