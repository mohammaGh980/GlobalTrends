document.getElementById('platform-select').addEventListener('change', function() {
    const platform = this.value;
    document.getElementById('results').innerText = `Du har valgt: ${platform}`;
});
