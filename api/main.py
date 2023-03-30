from flask import Flask, request
import requests

UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY="Ivrf0KPCVE-m1Wd2L2pHwY6e2Qj-I8Ww_7oyJ7Veg7Y"

app = Flask(__name__)

@app.route("/new_image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data    
if __name__ == "__main__":
    app.run(host:="0.0.0.0", port=5050)