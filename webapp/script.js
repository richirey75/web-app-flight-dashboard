function login(event) {
    event.preventDefault(); // Prevent form from reloading page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Dummy credentials (for example only)
    if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect username or password.";
    }
}
