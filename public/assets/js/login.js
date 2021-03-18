function login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value();
    const password = document.getElementById("pwd").value();
    console.log("we are logged in ");
}

const form = document
    .getElementById("logins")
    .addEventListener("submit", login);
form;