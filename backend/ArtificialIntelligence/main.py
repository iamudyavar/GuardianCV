import cv2
import numpy as np
from computerVision.gender_classification import *
from computerVision.injury import *
from computerVision.pose_estimation import *

def main():
    cv2.startWindowThread()
    cap = cv2.VideoCapture(0)

    while(True):
        ret, frame = cap.read()
        
        cv2.imshow('frame', frame)

        #
        #
        #
        #   CALL METHODS HERE
        #
        #
        #
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break


    cap.release()
    cv2.destroyAllWindows()

    cv2.waitKey()

if __name__ == "__main__":
    main()