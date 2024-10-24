// Initialiser kartet
var map = L.map('map').setView([20, 0], 2); // Sentrert på midten av verden

// Legg til et kartlag
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Legg til et GeoJSON lag (her kan du bruke et passende GeoJSON av verdens land)
fetch('https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    var countryName = feature.properties.ADMIN;
                    // Her kan du hente trenddata for det valgte landet
                    fetchTrendData(countryName);
                });
            }
        }).addTo(map);
    });

// Funksjon for å hente trenddata
function fetchTrendData(country) {
    // Her kan du implementere API-kall eller logikk for å hente data
    // For eksempel, simulere en API respons
    var trendData = {
        "Norge": "Kaffe",
        "Sverige": "Te",
        "Danmark": "Øl"
    };
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `Søle-trend i ${country}: ${trendData[country] || "Ingen data tilgjengelig"}`;
}
