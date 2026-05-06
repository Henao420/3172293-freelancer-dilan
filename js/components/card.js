export async function loadCards(containerSelector, cardIds = []) {

    const container = document.querySelector(containerSelector);
    if (!container) return;

    try {

        const [templateRes, dataRes] = await Promise.all([
            fetch("/views/components/card.html"),
            fetch("/data/cards.json")
        ]);

        const template = await templateRes.text();
        const cards = await dataRes.json();

        const filteredCards = cardIds.length ? cardIds.filter (card => cardIds.includes(card.id)) : cards;

        filteredCards.forEach(card => {
        let html = template
        .replace("{{image}}", card.image)
        .replace("{{button}}", card.button)

        container.innerHTML += html;
        });
        
    }   catch (error) {
        console.log("Error cargando las cards", error)
        }
}