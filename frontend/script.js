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
}
