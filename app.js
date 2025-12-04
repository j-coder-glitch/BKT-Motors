function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
}

function showSignup() {
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
}

// Fake local-storage based system (replace with API later)
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    document.getElementById("message").innerText = "Account created! You can login now.";
    showLogin();
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
        document.getElementById("message").innerText = "User not found.";
        return;
    }

    const user = JSON.parse(storedUser);

    if (user.password === password) {
        document.getElementById("message").innerText = `Welcome, ${user.name}!`;
    } else {
        document.getElementById("message").innerText = "Incorrect password.";
    }
});
