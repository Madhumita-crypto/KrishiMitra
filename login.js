document.getElementById("showPassword").addEventListener("change", function () {
  const passwordField = document.getElementById("password");
  passwordField.type = this.checked ? "text" : "password";
});

async function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.msg || "Login failed!");
      return;
    }

    // Store token and redirect
    localStorage.setItem("token", data.token);
    alert("Login successful!");
    window.location.href = "krishi.html"; // Or wherever you want to go next
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong. Please try again.");
  }
}
