// Opprett kartet
var map = L.map('map').setView([20, 0], 2); // Setter utgangspunktet for kartet

// Legg til OpenStreetMap-kartlag
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Legg til klikk-hendelse på kartet
map.on('click', function(e) {
    var latlng = e.latlng; // Få koordinater til klikket
    var popup = L.popup()
        .setLatLng(latlng) // Sett posisjonen til popup
        .setContent("<b>Klikk for å se trender!</b><br>Land: " + latlng.toString())
        .openOn(map);
        
    // Hent trender basert på klikket land
    fetchTrends(latlng);
});

// Funksjon for å hente trender
function fetchTrends(latlng) {
    const exampleCountry = 'Norway'; // Her kan du bruke latlng for å bestemme landet
    fetch(`/trends/google`) // Endre til den plattformen du vil hente data for
        .then(response => response.json())
        .then(data => {
            document.getElementById('results').innerText = `Trender for ${exampleCountry}: ${data.message}`;
        });
}
