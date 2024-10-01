# from flask import Flask, render_template, jsonify
# from flaskwebgui import FlaskUI

# app = Flask(__name__)

# # Rota para servir o frontend
# @app.route('/')
# def index():
#     return render_template('index.html')

# # Exemplo de uma rota de API
# @app.route('/api/data', methods=['GET'])
# def get_data():
#     return jsonify({'message': 'Hello from Flask!'})

# # Configurando FlaskWebGUI para rodar o app localmente
# if __name__ == "__main__":
#     FlaskUI(app=app, server='flask',port='5000', width=800, height=600).run()
# # app.run(host="127.0.0.1", port="2020")

#  # http://127.0.0.1:5000/
# #   server: str | ((Any) -> None),
# #     server_kwargs: dict = None,
# #     app: Any = None,
# #     port: int = None,

import requests

from flask import Flask, render_template, jsonify,request
import sqlite3
from flask_cors import CORS

from flaskwebgui import FlaskUI
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
    return render_template('main.html')


if __name__ == "__main__":
    app.register_blueprint(routes)
    FlaskUI(app=app, server='flask',port='5000', width=800, height=600).run()

# if __name__ == '__main__':
#     # app.register_blueprint(routes_app)  # Registra as rotas do módulo routes
#     app.register_blueprint(routes)

#     app.run(debug=True)
#     # http://127.0.0.1:5000/
#     # app.run(host="127.0.0.1", port="2020")






