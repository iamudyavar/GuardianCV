from .video_stream import prompting
from .video_stream import main
from backend.multimodal import describe
from flask import jsonify, Blueprint, request
import time

output = Blueprint("output", __name__)

@output.route("/get-output", methods=["GET"])
def endpoint():
    res = []
    n = main.main()
    print(f"WE HAVE DETECTED {n} INDIVIDUALS.")
    for i in range(n):
        dict_i = {}
        img_path = f"frontend/public/images/person_{i}.jpg"
        dict_i["severity"] = describe(img_path)
        dict_i["picture"] = img_path
        dict_i["_id"] = i
        res.append(dict_i)
    
    return jsonify(res), 200
