from video_stream import prompting
from video_stream import main
from multimodal import describe
import time
import os

print("BEFORE WHILE LOOP")
while(True):
    n = main.main()
    print("main.main EXECUTED")
    print(f"WE HAVE DETECTED {n} INDIVIDUALS.")
    for i in range(n):
        img_path = f"backend/video_stream/images/person_{i}.jpg"
        print(img_path)
        res = describe(img_path)#prompting.describe_image(img_path)
        print(res)
    time.sleep(10)
