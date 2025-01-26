import cv2
import numpy as np
import time
import torch
from ultralytics import YOLO




# Load the YOLOv5 model
print("Downloading YOLOv5 model...")
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
print("YOLOv5 model downloaded and loaded successfully!")




