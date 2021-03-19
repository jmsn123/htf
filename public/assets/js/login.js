const login = async(e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;
    if (email && password) {
        const data = await fetch(apiEndPoint, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
    }
};
const register = async(e) => {
    e.preventDefault;
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (username && password & email) {
        fetch(apiEndpoint, {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json" },
        });
    }
};

document.getElementById("logins").addEventListener("submit", login);
document.getElementById("signUp").addEventListener("submit", register);