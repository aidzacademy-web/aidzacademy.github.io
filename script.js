// script.js

// Add a dynamic greeting in the hero section
const heroHeading = document.querySelector('.hero h2');
if (heroHeading) {
    const hours = new Date().getHours();
    let greeting = "";
    if (hours < 12) greeting = "Good morning! ";
    else if (hours < 18) greeting = "Good afternoon! ";
    else greeting = "Good evening! ";

    heroHeading.textContent = `${greeting}
    Apprenez l’IA et le ML de manière pratique en Algérie`;

}
