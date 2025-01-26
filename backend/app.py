import flask
import flask_cors


@app.route('/entry', methods=['GET'])
def entry():
    