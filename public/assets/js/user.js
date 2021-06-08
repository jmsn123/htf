const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (email && password) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      console.log("new update", response);
    } else {
      console.log(response);
      alert("Failed to log in.");
    }
  }
};
const register = async function (e) {
  e.preventDefault();
  console.log("register : POST");

  try {
    const username = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("SignUpPassword").value;
    if (username && password && email) {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      return response.json();
    }
  } catch (err) {
    console.log(err);
  }
};

document.getElementById("Login").addEventListener("submit", loginFormHandler);
document.getElementById("Signup").addEventListener("submit", register);
