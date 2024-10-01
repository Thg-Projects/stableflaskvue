import requests

from flask import Flask, render_template, jsonify,request
import sqlite3
from flask_cors import CORS
# from routes import app as routes_app
from routes import routes
app = Flask(__name__)
cors = CORS(app)
DATABASE = 'database.db'

# Rota para redirecionar chamadas de API
@app.route('/api/<path:path>', methods=['GET', 'POST'])
def proxy(path):
    url = f"http://127.0.0.1:7860/{path}"

    print(f"url=  {url}")

    if request.method == 'POST':
        response = requests.post(url, json=request.json)
    else:
        response = requests.get(url, params=request.args)

    return jsonify(response.json())

@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    # app.register_blueprint(routes_app)  # Registra as rotas do módulo routes
    app.register_blueprint(routes)

    app.run(host="127.0.0.1", port="2020",debug=True)
    # http://127.0.0.1:5000/
    # app.run(host="127.0.0.1", port="2020")






