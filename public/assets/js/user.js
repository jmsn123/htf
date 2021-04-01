const login = async(e) => {
    e.preventDefault();
    console.log("login route call start ");
    try {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("pwd").value;
        console.log(email, password);
        if (email && password) {
            console.log("inside if block");
            const data = await fetch("/api/login/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" },
            });
            return data.json()
        }

    } catch (err) {
        console.log(err)
    }

};
const register = async function(e) {
    e.preventDefault();
    console.log("register : POST")

    try {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const apiEndpoint = "/api/login"
        console.log("username: " + username + " password : " + password + " email : " + email)
        if (username && password && email) {
            console.log("Before invokeing fetch")
            const response = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ username, email, password }),
                headers: { "Content-Type": "application/json" },
            });
            console.log("after invokeing fetch")
            return response.json()
        }

    } catch (err) {
        console.log(err)
    }
};

document.getElementById("logins").addEventListener("submit", login);
document.getElementById("signUp").addEventListener("submit", register);