from .video_stream import prompting
from .video_stream import main

import time
import os

print("BEFORE WHILE LOOP")
while(True):
    n = main.main()
    print("main.main EXECUTED")
    print(f"WE HAVE DETECTED {n} INDIVIDUALS.")
    for i in range(n):
        img_path = os.path() + f"/video_stream/images/person_{i}.jpg"
        print(img_path)

    time.sleep(10)
