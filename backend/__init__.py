from flask import Flask, request, jsonify
from flask_cors import CORS
from backend.output import output

def create_app():
    app = Flask(__name__)
    CORS(app) 

    app.register_blueprint(output, url_prefix ='/output')
    
    return app