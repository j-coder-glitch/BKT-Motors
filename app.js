function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");

    document.getElementById("loginTab").classList.add("active");
    document.getElementById("signupTab").classList.remove("active");
}

function showSignup() {
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");

    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("signupTab").classList.add("active");
}

// Local storage simulation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = {
        name: document.getElementById("signupName").value,
        email: document.getElementById("signupEmail").value,
        password: document.getElementById("signupPassword").value
    };

    localStorage.setItem(user.email, JSON.stringify(user));

    document.getElementById("message").innerText = "🎉 Account created! You can now log in.";
    showLogin();
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const stored = localStorage.getItem(email);

    if (!stored) {
        document.getElementById("message").innerText = "❌ User not found.";
        return;
    }

    const user = JSON.parse(stored);

    if (user.password === password) {
        document.getElementById("message").innerText = `🚗 Welcome back, ${user.name}!`;
    } else {
        document.getElementById("message").innerText = "❌ Incorrect password.";
    }
});

