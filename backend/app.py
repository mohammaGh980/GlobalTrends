from pytrends.request import TrendReq  # Importerer biblioteket som gir tilgang til Google Trends.

<<<<<<< Updated upstream
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
=======
# Initialiserer pytrends-objektet
# 'hl' setter språk til norsk ('no'), og 'tz' setter tidssone (360 betyr UTC +6 timer).
pytrends = TrendReq(hl='se', tz=360)w
>>>>>>> Stashed changes

# Setter ønsket land for trender (geo='NO' betyr Norge)
# 'kw_list' definerer hvilke søkeord vi er interessert i, her bruker vi "trending" for å hente de nyeste trendene.
pytrends.build_payload(kw_list=["trending"], geo='SE')

<<<<<<< Updated upstream
if __name__ == "__main__":
>>>>>>> 8a15e9bae2e72cda9eacd574dd2721f5769cef76
    app.run(debug=True)
=======
# Henter de nyeste trendene for Norge ('pn='norway' viser at vi ønsker trender fra Norge)
# Resultatet blir en liste med populære søk i Norge.
trending_searches = pytrends.trending_searches(pn='sweden')

# Skriver ut de nyeste trendene
print(trending_searches)
>>>>>>> Stashed changes
