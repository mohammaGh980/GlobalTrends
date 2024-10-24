from flask import Flask, jsonify, request
from pytrends.request import TrendReq

app = Flask(__name__)

# Funksjon for å hente Google Trends basert på landkode
def get_google_trends(country_code):
    # Initialiser Pytrends
    pytrends = TrendReq(hl='no', tz=360)
    
    # Setter opp forespørselen til Google Trends
    pytrends.build_payload(kw_list=[''], geo=country_code, timeframe='today 12-m')

    # Henter data for de mest populære søkene i det spesifiserte landet
    trending_searches = pytrends.trending_searches(pn=country_code)
    
    return trending_searches

@app.route('/trends/<country_code>', methods=['GET'])
def trends(country_code):
    try:
        # Hent søketrender for landet
        trends_data = get_google_trends(country_code)
        return jsonify(trends_data.tolist())  # Returner data som JSON
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Returner feilmelding ved feil

if __name__ == '__main__':
    app.run(debug=True)
