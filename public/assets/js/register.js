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