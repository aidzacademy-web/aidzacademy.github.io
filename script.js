// script.js

// 1. Show a simple welcome alert when the page loads
window.addEventListener('load', () => {
    alert("Welcome to AI DZ Academy! 🚀");
});

// 2. Add a dynamic greeting in the hero section
const heroHeading = document.querySelector('.hero h2');
if (heroHeading) {
    const hours = new Date().getHours();
    let greeting = "Welcome!";
    if (hours < 12) greeting = "Good morning!";
    else if (hours < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";
    heroHeading.textContent = `${greeting} Learn Practical AI & ML in Algeria`;
}
