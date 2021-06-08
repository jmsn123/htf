const logout = async (e) => {
  // Make a POST request to destroy the session on the back end
  let data = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch("/api/auth/logout", data);
  console.log(e);
  if (response.ok) {
    // If successfully logged out, redirect to the login page
    document.location.replace("/login");
  } else {
    alert(response.ok);
  }
};
document.getElementById("logout").style.display = "block";

document.getElementById("logout").addEventListener("click", logout);
