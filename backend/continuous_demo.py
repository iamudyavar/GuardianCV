from video_stream import prompting
from video_stream import main
from multimodal import describe
import time

print("----------------------------------------")
while(True):
    res = []
    n = main.main()
    print(f"WE HAVE DETECTED {n} INDIVIDUALS.")
    for i in range(n):
        img_path = f"frontend/public/images/person_{i}.jpg"
        res.append(describe(img_path))
        print(res)

    time.sleep(10)
print("----------------------------------------")
