document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("main-header");
    const heroSection = document.getElementById("hero-section");

    window.addEventListener("scroll", function () {
        // Ottieni l'altezza della sezione hero
        const heroHeight = heroSection.offsetHeight;

        // Ottieni la posizione corrente dello scrolling
        const scrollPosition = window.scrollY;

        // Verifica se la posizione di scrolling supera l'altezza della sezione hero
        if (scrollPosition > heroHeight) {
            // Se supera, rendi l'header bianco
            header.style.backgroundColor = "#fff";
        } else {
            // Altrimenti, torna al colore di sfondo trasparente
            header.style.backgroundColor = "rgba(255, 192, 23, 255)";
        }
    });
});
