from flask import Flask, abort,render_template, request, jsonify, redirect, url_for, send_from_directory
import sqlite3, json
from flask import Blueprint

routes = Blueprint('routes', __name__)
from app import app, DATABASE

# from flask import Blueprint

# app = Blueprint('app', __name__)
@routes.route('/api/datax')
def api_data():
    # Conecta ao banco de dados
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Executa uma consulta para obter os dados
    cursor.execute("SELECT * FROM objetos")
    data = cursor.fetchall()

    # Fecha a conexão com o banco de dados
    conn.close()

    # Retorna os dados em formato JSON
        # Renderiza o template list.html e passa a lista de objetos JSON como um argumento
    return render_template('main_card_model.html', data=data)
    # return jsonify(data)

# Rota '/insert' para receber os dados JSON e inserir no SQLite
@routes.route('/insert', methods=['POST'])
def insert_data():
    data = request.get_json()

    # Extrair os valores do objeto
    modelId = data['modelId']
    nome = data['nome']
    nsfw = data['nsfw']
    tags = data['tags']
    tipo = data['tipo']
    criador = data['criador']
    trigger = data['trigger']
    modelNome = data['modelNome']
    modelImage = data['modelImage']
    download = data['download']
    favorito = data['favorito']
    downloadCount = data['downloadCount']
    favoriteCount = data['favoriteCount']
    rating = data['rating']
    criadorImage = data['criadorImage']
    imagesFiles = data['imagesFiles']

    # Inserir os valores na tabela SQLite INSERT OR IGNORE INTO 
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('CREATE TABLE IF NOT EXISTS objetos (id INTEGER PRIMARY KEY AUTOINCREMENT,modelId INTEGER, nome TEXT, nsfw TEXT, tags TEXT, tipo TEXT, criador TEXT, trigger TEXT, modelNome TEXT, modelImage TEXT, download INTEGER, favorito INTEGER,downloadCount INTEGER, favoriteCount INTEGER, rating INTEGER,criadorImage TEXT,imagesFiles TEXT)')
    conn.close()

        # Verificar se já existe um registro com o mesmo modelId

    # conn = sqlite3.connect(DATABASE)
    # cursor = conn.cursor()

    # Verificar se já existe um registro com o mesmo modelId
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM objetos WHERE modelId = ?", (modelId,))
    count = cursor.fetchone()[0]

    if count == 0:
        # Se não existir, realizar a inserção
        cursor.execute("INSERT INTO objetos (modelId, nome, nsfw, tags, tipo, criador, trigger, modelNome, modelImage, download, favorito, downloadCount, favoriteCount, rating, criadorImage, imagesFiles) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    (modelId, nome, str(nsfw), json.dumps(tags), tipo, criador, json.dumps(trigger), modelNome, modelImage, download, favorito, downloadCount, favoriteCount, rating, criadorImage, json.dumps(imagesFiles)))
        conn.commit()
    else:
        # Registro já existe, tratar de acordo com a sua necessidade (ignorar ou atualizar)
        print("ja exite")
        pass

    conn.close()

    # conn = sqlite3.connect(DATABASE)
    # conn.execute("INSERT OR IGNORE INTO  objetos (modelId, nome, nsfw, tags, tipo, criador, trigger, modelNome, modelImage,download,favorito,downloadCount, favoriteCount, rating, criadorImage, imagesFiles) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?, ?, ?,?,?)",
    #              (modelId, nome, str(nsfw), json.dumps(tags), tipo, criador, json.dumps(trigger), modelNome, modelImage,download,favorito,downloadCount, favoriteCount, rating, criadorImage, json.dumps(imagesFiles)))
    # conn.commit()
    # conn.close()

    # Consultar os dados inseridos e retornar em formato JSON
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM objetos")
    rows = cursor.fetchall()
    conn.close()

   # Converter os dados em uma lista de dicionários
    data_list = []
    for row in rows:
        data_dict = {
            'id': row[2],
            'modelId': row[0],
            'nome': row[1],
            'nsfw': row[3],
            'tags': row[4],
            'tipo': row[5],
            'criador': row[6],
            'trigger': row[7],
            'modelNome': row[8],
            'modelImage': row[9],
            'download': row[10],
            'favorito': row[11],

            'downloadCount': row[12],
            'favoriteCount': row[13],
            'rating': row[14],
            'criadorImage': row[15],
            'imagesFiles': row[16]
        }
        data_list.append(data_dict)

    return jsonify(data_list)



@routes.route('/api/data')
def api_dataa():
    # Conecta ao banco de dados
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Executa uma consulta para obter os dados
    cursor.execute("SELECT * FROM objetos")
    data = cursor.fetchall()

    # Fecha a conexão com o banco de dados
    conn.close()

    # Retorna os dados em formato JSON
    return jsonify(data)

@routes.route('/api/Checkpoint')
def api_Checkpoint():
    # Conecta ao banco de dados
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Executa uma consulta para obter os dados
    cursor.execute("SELECT * FROM objetos WHERE [tipo] = 'Checkpoint'")
    data = cursor.fetchall()

    # Fecha a conexão com o banco de dados
    conn.close()

    # Retorna os dados em formato JSON
    return jsonify(data)

@routes.route('/api/Lora')
def api_Lora():
    # Conecta ao banco de dados
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Executa uma consulta para obter os dados
    cursor.execute("SELECT * FROM objetos WHERE [tipo] = 'LORA'")
    data = cursor.fetchall()

    # Fecha a conexão com o banco de dados
    conn.close()

    # Retorna os dados em formato JSON
    return jsonify(data)




@routes.route('/filtro', methods=['POST'])
def filtro():
    data = request.get_json()
    tags = data['tags']

    # Conectar ao banco de dados SQLite
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Montar a consulta dinamicamente com base nas tags
    query = "SELECT * FROM objetos WHERE "
    conditions = []
    for tag in tags:
        conditions.append("tags LIKE '%{}%'".format(tag))
    query += " OR ".join(conditions)

    # Conectar ao banco de dados SQLite
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Executar a consulta para filtrar os dados com base nas tags
    cursor.execute(query)
    rows = cursor.fetchall()

    # Fechar a conexão com o banco de dados
    cursor.close()
    conn.close()

    # Retornar os dados filtrados como resposta em JSON
    return jsonify(rows)


# Rota para a função de atualização
@routes.route('/atualizarDownload', methods=['POST'])
def atualizarDownload():
    # Recebe os dados da requisição POST
    dados = request.get_json()

    # Obtém os valores dos campos download e id
    download = int(dados['download'])  # Converte para inteiro
    id = int(dados['id'])  # Converte para inteiro

    # Conecta ao banco de dados SQLite
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    try:
        # Executa o comando SQL para fazer o update
        cursor.execute("UPDATE objetos SET download = ? WHERE id = ?", (download, id))
        conn.commit()
        status = 'success'
    except Exception as e:
        print(e)
        status = 'error'

    conn.close()

    # Retorna uma resposta JSON
    return jsonify({'status': status})

# Rota para a função de atualização
@routes.route('/atualizarFavorito', methods=['POST'])
def atualizarFavorito():
    # Recebe os dados da requisição POST
    dados = request.get_json()

    # Obtém os valores dos campos download e id
    favorito = int(dados['favorito'])  # Converte para inteiro
    id = int(dados['id'])  # Converte para inteiro

    # Conecta ao banco de dados SQLite
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    try:
        # Executa o comando SQL para fazer o update
        cursor.execute("UPDATE objetos SET favorito = ? WHERE id = ?", (favorito, id))
        conn.commit()
        status = 'success'
    except Exception as e:
        print(e)
        status = 'error'

    conn.close()

    # Retorna uma resposta JSON
    return jsonify({'status': status})

# Define a function to query the database and get the counts
def get_counts():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()



    # Total count for 'tipo' where value is 'LORA' or 'Checkpoint'
    cursor.execute('SELECT COUNT(tipo) FROM objetos')
    ModelTotal = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM objetos WHERE tipo IN ("LORA")')
    LoraCount = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM objetos WHERE tipo IN ("Checkpoint")')
    CheckpointCount = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(download) FROM objetos')
    DownloadCount = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(favorito) FROM objetos')
    FavoritoCount = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM objetos WHERE download  AND tipo IN ("LORA")')
    DownloadInLora = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM objetos WHERE download  AND tipo IN ("Checkpoint")')
    DownloadInCheckpoint = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM objetos WHERE favorito  AND tipo IN ("Checkpoint")')
    FavoritoInCheckpoint = cursor.fetchone()[0]

    cursor.execute('SELECT COUNT(*) FROM objetos WHERE favorito  AND tipo IN ("LORA")')
    FavoritoInLora = cursor.fetchone()[0]

    conn.close()
    return ModelTotal, LoraCount, CheckpointCount, FavoritoCount, DownloadCount, FavoritoInLora, FavoritoInCheckpoint, DownloadInLora, DownloadInCheckpoint
   

# Define a Flask route to get the counts
# @routes.route('/atualizarFavorito', methods=['POST'])
@routes.route('/get_counts', methods=['GET'])
def counts():

    ModelTotal, LoraCount, CheckpointCount, FavoritoCount, DownloadCount, FavoritoInLora, FavoritoInCheckpoint, DownloadInLora, DownloadInCheckpoint= get_counts()
    
    return jsonify({

      'ModelTotal': ModelTotal,
      'LoraCount': LoraCount,
      'CheckpointCount': CheckpointCount,
      'FavoritoCount': FavoritoCount,
      'DownloadCount': DownloadCount,
      'FavoritoInLora': FavoritoInLora,
      'FavoritoInCheckpoint': FavoritoInCheckpoint,
      'DownloadInLora': DownloadInLora,
      'DownloadInCheckpoint': DownloadInCheckpoint
    })




@routes.route('/api/config')
def api_config():
    # Conecta ao banco de dados
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Executa uma consulta para obter os dados
    cursor.execute("SELECT * FROM configUser")
    data = cursor.fetchall()

    # Fecha a conexão com o banco de dados
    conn.close()

    # Retorna os dados em formato JSON
    return jsonify(data)



# Rota '/insert' para receber os dados JSON e inserir no SQLite
@routes.route('/config', methods=['POST'])
def insert_config():
    data = request.get_json()

    # Extrair os valores do objeto
    userName = data['userName']
    email = data['email']
    nsfwBlur = data['nsfwBlur']
    nfswDisable = data['nfswDisable']
    darkMode = data['darkMode']
    themeColor = data['themeColor']


    # Inserir os valores na tabela SQLite INSERT OR IGNORE INTO 
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('CREATE TABLE IF NOT EXISTS configUser (id INTEGER PRIMARY KEY AUTOINCREMENT,userName INTEGER, email TEXT, nsfwBlur TEXT, nfswDisable TEXT, darkMode TEXT, themeColor TEXT)')
    conn.close()

    # Verificar se já existe um registro com o mesmo modelId
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM configUser WHERE userName = ?", (userName,))
    count = cursor.fetchone()[0]

    if count == 0:
        # Se não existir, realizar a inserção
        cursor.execute("INSERT INTO configUser (userName, email, nsfwBlur, nfswDisable, darkMode, themeColor) VALUES (?, ?, ?, ?, ?, ?)",
                    (userName, email, str(nsfwBlur),str(nfswDisable),str(darkMode),themeColor))
        conn.commit()
    else:
        # Registro já existe, tratar de acordo com a sua necessidade (ignorar ou atualizar)
        print("ja exite")
        pass

    conn.close()

    # conn = sqlite3.connect(DATABASE)
    # conn.execute("INSERT OR IGNORE INTO  objetos (modelId, nome, nsfw, tags, tipo, criador, trigger, modelNome, modelImage,download,favorito,downloadCount, favoriteCount, rating, criadorImage, imagesFiles) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?, ?, ?,?,?)",
    #              (modelId, nome, str(nsfw), json.dumps(tags), tipo, criador, json.dumps(trigger), modelNome, modelImage,download,favorito,downloadCount, favoriteCount, rating, criadorImage, json.dumps(imagesFiles)))
    # conn.commit()
    # conn.close()

    # Consultar os dados inseridos e retornar em formato JSON
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM configUser")
    rows = cursor.fetchall()
    conn.close()



   # Converter os dados em uma lista de dicionários
    data_list = []
    for row in rows:
        data_dict = {
            'id': row[0],
            'userName': row[1],
            'email': row[2],
            'nsfwBlur': row[3],
            'nfswDisable': row[4],
            'darkMode': row[5],
            'themeColor': row[6]
        }
        data_list.append(data_dict)

    return jsonify(data_list)


def update_column(table, primary_key_column, primary_key_value, **columns_data):
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    # Verificar se a tabela existe no banco de dados
    cursor.execute(f"PRAGMA table_info({table})")
    columns_info = cursor.fetchall()
    column_names = [col[1] for col in columns_info]

    # Verificar se as colunas fornecidas existem na tabela
    for column in columns_data.keys():
        if column not in column_names:
            return f"A coluna '{column}' não existe na tabela '{table}'."

    # Construir a consulta SQL dinamicamente para atualizar as colunas
    set_clause = ', '.join([f"{column} = ?" for column in columns_data.keys()])
    values = tuple(columns_data.values()) + (primary_key_value,)
    query = f"UPDATE {table} SET {set_clause} WHERE {primary_key_column} = ?"
    cursor.execute(query, values)
    conn.commit()
    conn.close()

    return f"Dados atualizados na tabela '{table}'."

@routes.route('/update_data', methods=['POST'])
def update_data():
    data = request.get_json()
    id = data['id']

    # Chamar a função update_column com os dados fornecidos no JSON
    result = update_column("configUser", "id", id, **data)
    return result

import os
import platform
import glob

@routes.route('/getAbrirPastaSaida', methods=['POST'])
def getAbrirPastaSaida():
    data = request.get_json()
    path = data.get('path')
    print(path)
    # directory_path = "M:\\StableDiffusion\\stable-diffusion-webui "  # Certifique-se que a variável não é None
    if not path:
        raise ValueError("O caminho fornecido está vazio ou é None.")
    # Corrige o caminho de acordo com o sistema operacional
    normalized_path = os.path.normpath(path)
        # Obtém a lista de pastas dentro do diretório
    subdirectories = [f for f in glob.glob(os.path.join(normalized_path, '*')) if os.path.isdir(f)]
    if not subdirectories:
        latest_folder = normalized_path
    else:
        # Acha a última pasta modificada
        latest_folder = max(subdirectories, key=os.path.getmtime)  # Para data de modificação
        # latest_folder = max(subdirectories, key=os.path.getctime)  # Para data de criação
    # normalized_path = os.path.normpath(path)
    if platform.system() == "Windows":
        os.startfile(latest_folder)  # Abre o diretório no Windows
    # return f'Diretório {directory_path} foi aberto.'
    # Conecta ao banco de dados
    data_dict = {
            'id':path,
        }
    return jsonify(data_dict)

@routes.route('/getAbrirPastaSaidaLocal', methods=['POST'])
def getAbrirPastaSaidaLocal():
    data = request.get_json()
    path = data.get('path')
    print(path)
    # directory_path = "M:\\StableDiffusion\\stable-diffusion-webui "  # Certifique-se que a variável não é None
    if not path:
        raise ValueError("O caminho fornecido está vazio ou é None.")
    # Corrige o caminho de acordo com o sistema operacional
    normalized_path = os.path.normpath(path)
        # Obtém a lista de pastas dentro do diretório
    subdirectories = [f for f in glob.glob(os.path.join(normalized_path, '*')) if os.path.isdir(f)]
    if not subdirectories:
        latest_folder = normalized_path
    else:
        # Acha a última pasta modificada
        latest_folder = max(subdirectories, key=os.path.getmtime)  # Para data de modificação
        # latest_folder = max(subdirectories, key=os.path.getctime)  # Para data de criação
    # normalized_path = os.path.normpath(path)
    if platform.system() == "Windows":
        os.startfile(latest_folder)  # Abre o diretório no Windows
    # return f'Diretório {directory_path} foi aberto.'
    # Conecta ao banco de dados
    data_dict = {
            'id':path,
        }
    return jsonify(data_dict)
    # Retorna os dados em formato JSON

import os
import base64
from datetime import datetime
from flask import request, jsonify
from io import BytesIO
from PIL import Image

# Defina a pasta base onde as imagens serão salvas

@routes.route('/getSalvarImage', methods=['POST'])
def getSalvarImage():
    try:

        data = request.get_json()
        image_data = data.get('image')  # Exemplo: data:image/png;base64,
        name = data.get('name')
        # Defina a pasta base onde as imagens serão salvas
        BASE_DIR = 'imagens'  # Diretório base onde as imagens serão salvas


        # Valida se a imagem e o nome foram passados corretamente
        if not image_data or not name:
            return jsonify({'error': 'Imagem ou nome não fornecidos'}), 400

        # Extrai a parte base64 da string
        if image_data.startswith('data:image/png;base64,'):
            image_data = image_data.replace('data:image/png;base64,', '')
        
        # Decodifica a string Base64 em bytes
        image_bytes = base64.b64decode(image_data)

        # Gera o caminho da pasta com base na data atual (dia-mês-ano)
        current_date = datetime.now().strftime('%d-%m-%Y')
        image_folder = os.path.join(BASE_DIR, current_date)

        # Cria a pasta, se ela ainda não existir
        os.makedirs(image_folder, exist_ok=True)

        # Gera o caminho completo do arquivo para salvar
        image_path = os.path.join(image_folder, f'{name}.png')

        # Salva a imagem como arquivo PNG
        with open(image_path, 'wb') as image_file:
            image_file.write(image_bytes)

        return jsonify({'message': 'Imagem salva com sucesso', 'path': image_path})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
def saveJson(listJson, nameFile, indentes):
    with open(nameFile+'.json', 'w', encoding='utf-8') as json_file:
        json.dump(listJson, json_file,ensure_ascii=False, indent=indentes)
        #print('save Json Ok')




@routes.route('/getSaveListaJson', methods=['POST'])
def getSaveListaJson():
    try:
        data = request.get_json()
        nome = data.get('nome')  # Nome do arquivo JSON
        jsonFile = data.get('jsonFile')  # O conteúdo a ser salvo no arquivo

        # Defina a pasta base onde os arquivos serão salvos
        BASE_DIR = 'ListaPrompts'  # Diretório base

        # Certifique-se de que o diretório existe
        if not os.path.exists(BASE_DIR):
            os.makedirs(BASE_DIR)

        # Montar o caminho completo do arquivo
        file_path = os.path.join(BASE_DIR, f'{nome}.json')

        # Salvar o arquivo JSON
        with open(file_path, 'w', encoding='utf-8') as json_file:
            json.dump(jsonFile, json_file, ensure_ascii=False, indent=2)

        return jsonify({'message': 'JSON salvo com sucesso'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@routes.route('/getImportListaJson', methods=['POST'])
def getImportListaJson():
    try:
        data = request.get_json()
        nome = data.get('nome')  # Nome do arquivo JSON

        # Defina a pasta base onde os arquivos estão armazenados
        BASE_DIR = 'ListaPrompts'  # Diretório base

        # Montar o caminho completo do arquivo
        file_path = os.path.join(BASE_DIR, f'{nome}.json')

        # Verifica se o arquivo existe
        if not os.path.exists(file_path):
            return jsonify({'error': 'Arquivo não encontrado'}), 404
        
        json_data = []
        # Ler o conteúdo do arquivo JSON
        with open(file_path, 'r', encoding='utf-8') as json_file:
            json_data = json.load(json_file)

        # Retorna o conteúdo do arquivo JSON
        return jsonify({'data': json_data})

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@routes.route('/getListaJson', methods=['GET'])
def getListaJson():
    try:
        # Defina a pasta base onde os arquivos estão armazenados
        BASE_DIR = 'ListaPrompts'  # Diretório base

        # Verifica se o diretório existe
        if not os.path.exists(BASE_DIR):
            return jsonify({'error': 'Diretório não encontrado'}), 404

        # Lista todos os arquivos na pasta e filtra apenas os arquivos .json
        # lista_arquivos = [f for f in os.listdir(BASE_DIR) if f.endswith('.json')]
        lista_arquivos = [os.path.splitext(f)[0] for f in os.listdir(BASE_DIR) if f.endswith('.json')]


        # Retorna a lista de arquivos JSON
        return jsonify( lista_arquivos)

    except Exception as e:
        return jsonify({'error': str(e)}), 500