from flask import Flask, request, jsonify
from backend.output import output

def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(output, url_prefix ='/output')
    
    return app