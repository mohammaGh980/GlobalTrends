# app.py
from flask import Flask, request, jsonify
from pytrends.request import TrendReq

app = Flask(__name__)
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
    app.run(debug=True)
