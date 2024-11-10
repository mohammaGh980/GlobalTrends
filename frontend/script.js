<<<<<<< HEAD
// script.js
function getTrends(countryCode) {
    fetch(`/trending?country=${countryCode}`)
        .then(response => response.json())
        .then(data => {
            const trendsDiv = document.getElementById('trends');
            trendsDiv.innerHTML = ""; // Tøm tidligere trender

            data.forEach((trend, index) => {
                const trendItem = document.createElement('div');
                trendItem.textContent = `${index + 1}. ${trend}`;
                trendsDiv.appendChild(trendItem);
            });
        })
        .catch(error => console.error("Error fetching trends:", error));
=======
// Initialiser kartet og sett senter og zoom-nivå
const map = L.map('map').setView([20, 0], 2); // Sentrer på verden

// Legg til OpenStreetMap-fliser
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Funksjon for å vise melding
function showMessage(country, trends) {
    const messageBox = document.getElementById('message-box');
    messageBox.innerHTML = `<h2>Trender i ${country}</h2>`;
    trends.forEach(trend => {
        messageBox.innerHTML += `<p>${trend}</p>`;
    });
    messageBox.style.display = 'block';
>>>>>>> 8a15e9bae2e72cda9eacd574dd2721f5769cef76
}

// Simulerer trender for ulike land
const countryTrends = {
    "Norge": [
        "Vinter-OL 2024",
        "Krimkrisen",
        "Oslo Maraton"
    ],
    "Sverige": [
        "Abba comeback",
        "Svenske mattrender",
        "Nye iPhone lansering"
    ],
    "USA": [
        "Super Bowl 2024",
        "E-sport som sport",
        "Tesla Model Z"
    ],
    "Frankrike": [
        "Paris Fashion Week",
        "Tour de France 2024",
        "Le Louvre reåpning"
    ],
    "Brasil": [
        "Samba-festivaler",
        "Olympiske leker 2024",
        "Brasil vs Argentina fotballkamp"
    ],
    "Japan": [
        "Tokyo Anime Expo",
        "Japansk mat-trend",
        "Ny teknologi i Tokyo"
    ],
    "Australia": [
        "Australia Open Tennis",
        "Ny Marvel film",
        "Største dyrehage festival"
    ],
    "India": [
        "Bollywood Filmer",
        "Indiske festivaler",
        "Indiske e-sport lag"
    ],
    "Sør-Afrika": [
        "Verdens beste safariturer",
        "Kunstfestival i Johannesburg",
        "Cricket VM 2024"
    ]
};

// Definer en liste over land med navn og koordinater
const countries = [
    { name: "Norge", coords: [60.472, 8.4689] },
    { name: "Sverige", coords: [60.1282, 18.6435] },
    { name: "USA", coords: [37.0902, -95.7129] },
    { name: "Frankrike", coords: [46.6034, 1.8883] },
    { name: "Brasil", coords: [-14.2350, -51.9253] },
    { name: "Japan", coords: [36.2048, 138.2529] },
    { name: "Australia", coords: [-25.2744, 133.7751] },
    { name: "India", coords: [20.5937, 78.9629] },
    { name: "Sør-Afrika", coords: [-30.5595, 22.9375] }
];

// Legg til markører på kartet for hvert land i listen
countries.forEach(country => {
    L.marker(country.coords)
        .addTo(map)
        .bindPopup(`Klikk her for ${country.name}`)
        .on('click', () => showMessage(country.name, countryTrends[country.name]));
});
