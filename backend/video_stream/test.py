import cv2
import numpy as np
import time
import PIL.Image
import torch
from ultralytics import YOLO

class ResettableTimer:
    def __init__(self, timeout):
        self.timeout = timeout
        self.start_time = time.time()

    def reset(self):
        self.start_time = time.time()

    def is_timeout(self):
        return time.time() - self.start_time >= self.timeout

print("Loading...")
model = YOLO("yolov5su.pt")
model.eval()
face_classifier = cv2.CascadeClassifier(
    cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
)
print("Finished loading...")

def main():
    cv2.startWindowThread()
    cap = cv2.VideoCapture(0)
    out = cv2.VideoWriter('output.avi', cv2.VideoWriter_fourcc(*'MJPG'), 15., (int(cap.get(3)), int(cap.get(4))))
    #thresholder = ResettableTimer(1)

    while True:
        storage = []
        ret, frame = cap.read()
        if not ret:
            print("Failed to read frame.")
            break


        # Use YOLOv5 for human detection
        results = model(frame)
        face = face_classifier.detectMultiScale(
            frame, scaleFactor=1.075, minNeighbors=6, minSize=(40, 40)
        )

        print("Rendered")
        for result in results:
            boxes = result.boxes
            for i, box in enumerate(boxes):
                if 'person' in result.names[int(box.cls)]:
                    x1, y1, x2, y2 = map(int, box.xyxy[0])
                    confidence  = box.conf.item()
                    if confidence >= 0.85:
                        frame = cv2.resize(frame, (int(cap.get(3)), int(cap.get(4))))
                        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 1)
                        for (x, y, w, h) in face:
                            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 1)
                        person_roi = frame[y1:y2, x1:x2]
                        cv2.imwrite(f"frontend\\public\\images\\person_{i}.jpg", person_roi)
                        storage.append(person_roi)

        cv2.imshow('frame', frame)
        out.write(frame.astype('uint8'))
        #if thresholder.is_timeout():
        #print("10 seconds have passed! Performing action...")
            #thresholder.reset()

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
        
    time.sleep(2)
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    cv2.waitKey()

main()