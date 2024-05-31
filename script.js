const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "1012" && password === "ra") {
        alert("Login Successful!");
        window.location.href = "student_profile.html"; 
        return false; 
        alert("Incorrect username or password. Please try again.");
        return false; 
    }
}