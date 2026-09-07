const cards = document.querySelectorAll(
    ".project, .box, .skill, .certificate-group"
);
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
});
function showCards() {
    cards.forEach(card => {
        const cardTop =
            card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform =
                "translateY(0)";
        }
    });
}
window.addEventListener("scroll", showCards);
showCards();