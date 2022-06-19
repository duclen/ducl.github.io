const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#greeting");
    const HIDDEN_CLASSNAME = "hidden";

function onLogin(tomato){
    tomato.preventDefault();
    const username = loginInput.value;
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLogin);

const savedUsername = localStorage.getItem("username");
console.log(savedUsername);