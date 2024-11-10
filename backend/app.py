# app.py
from flask import Flask, request, jsonify
from pytrends.request import TrendReq

app = Flask(__name__)
<<<<<<< HEAD
pytrends = TrendReq(hl='en-US', tz=360)

# Henter de siste trending søkene for et spesifikt land
@app.route('/trending', methods=['GET'])
def get_trending():
    country = request.args.get('country')
    pytrends.build_payload(kw_list=[''], geo=country)  # Angi landskoden
    trending_data = pytrends.trending_searches(pn=country)
    trends = trending_data[0].tolist()  # Konverter til en liste

    return jsonify(trends)

if __name__ == '__main__':
=======
pytrends = TrendReq(hl='no', tz=360)

@app.route('/trends')
def trends():
    country = request.args.get('country')
    geo = 'NO' if country == 'NO' else country
    pytrends.build_payload(kw_list=[''], geo=geo)
    trending_searches = pytrends.trending_searches(pn=country)
    trends = trending_searches[0].tolist()  # Henter første kolonne med trend-navn
    return jsonify(trends)

if __name__ == "__main__":
>>>>>>> 8a15e9bae2e72cda9eacd574dd2721f5769cef76
    app.run(debug=True)
