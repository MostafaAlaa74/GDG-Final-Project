// Toggle Password Visibility
const eyeIcon = document.querySelector('.eye');
const passwordInput = document.querySelector('.password');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = './assets/images/eye.png'; // Change to open eye icon
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = './assets/images/eye-slash.png'; // Change to closed eye icon
    }
});

// Handle Form Submission
document.querySelector(".login").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const rememberCheckbox = document.querySelector('#remember');

    console.log("Sending Login Data:", { email });

    try {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok && data.token) {  // Ensure response is OK and token exists
            console.log("Login Successful:", data);
            alert("Login Successful: " + data.message);

            // Save token to localStorage
            localStorage.setItem("authToken", data.token);

            // Save email to localStorage if "Remember me" is checked
            if (rememberCheckbox.checked) {
                localStorage.setItem("rememberedEmail", email);
            } else {
                localStorage.removeItem("rememberedEmail");
            }

            // Redirect only if the token exists
            window.location.href = "index.html"; // Change to your desired redirect page
        } else {
            console.error("Login Failed:", data);
            alert("Login Failed: " + (data.message || "Invalid email or password"));
        }
    } catch (error) {
        console.error("Network Error:", error);
        alert("Network Error: Could not connect to the server.");
    }
});

// Populate Email Field if Remembered
window.addEventListener('load', () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.querySelector('.email').value = rememberedEmail;
        document.querySelector('#remember').checked = true;
    }
});

// Check if user is already logged in (Prevent access if no token)
window.addEventListener('load', () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
        console.warn("No token found. Redirecting to login page.");
        window.location.href = "login.html"; // Redirect back to login page if no token
    }
});
