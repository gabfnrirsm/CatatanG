document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // mencegah form reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "gabriello" && password === "pibertapinem123") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error-msg").innerText = "Username atau password salah!";
  }
});
