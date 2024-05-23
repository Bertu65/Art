// Dati delle opere d'arte
const artworks = [
    { name: "Titolo Opera 1", image: "opera1.jpg", price: 100 },
    { name: "Titolo Opera 2", image: "opera2.jpg", price: 150 },
    { name: "Titolo Opera 3", image: "opera3.jpg", price: 200 },
    { name: "Titolo Opera 4", image: "opera4.jpg", price: 100 },
    { name: "Titolo Opera 5", image: "opera5.webp", price: 150 },
    { name: "Titolo Opera 6", image: "opera6.png", price: 200 },
    // Aggiungi altre opere d'arte qui
];

// Funzione per visualizzare le opere d'arte
function displayArtworks() {
    const artworkContainer = document.querySelector('.artwork');
    artworkContainer.innerHTML = '';
    artworks.forEach(artwork => {
        const artworkItem = document.createElement('div');
        artworkItem.classList.add('artwork-item');
        artworkItem.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.name}">
            <h3>${artwork.name}</h3>
            <p>Prezzo: $${artwork.price}</p>
        `;
        artworkItem.addEventListener('click', () => {
            openModal(artwork.image, artwork.name);
        });
        artworkContainer.appendChild(artworkItem);
    });
}

// Funzione per aprire la finestra modale
function openModal(imageSrc, captionText) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;

    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function() {
        modal.style.display = "none";
    }
}

// Mostra le opere d'arte al caricamento della pagina
window.onload = function() {
    displayArtworks();
};
