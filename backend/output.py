from .video_stream import prompting
from .video_stream import main
from backend.multimodal import describe
from flask import jsonify, Blueprint, request
import time
import random

output = Blueprint("output", __name__)

@output.route("/get-output", methods=["GET"])
def endpoint():
    res = []
    n = main.main()
    if n == None:
        n = 0
    print(f"WE HAVE DETECTED {n} INDIVIDUALS.")
    for i in range(n):
        dict_i = {}
        img_path = f"frontend/public/images/person_{i}.jpg"
        dict_i["severity"] = describe(img_path)
        dict_i["picture"] = f"/images/person_{i}.jpg"
        dict_i["_id"] = i
        dict_i["name"] = "TBD"
        dict_i["time_waited"] = random.randint(0, 10)
        res.append(dict_i)
    #res.headers.add('Access-Control-Allow-Origin', '*')
    
    return jsonify(res), 200