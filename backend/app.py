# app.py
from flask import Flask, request, jsonify
from pytrends.request import TrendReq

app = Flask(__name__)
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
    app.run(debug=True)
