import cv2
import numpy as np
from computerVision.gender_classification import predict_gender
from computerVision.injury import detect_injury
from computerVision.pose_estimation import estimate_pose

# CREATING HUMAN DETECTION ALGO
hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())


def main():
    cv2.startWindowThread()
    cap = cv2.VideoCapture(0)
    
    out = cv2.VideoWriter('output.avi', cv2.VideoWriter_fourcc(*'MJPG'), 15., (640, 480))

    while True:
        ret, frame = cap.read()
        if not ret:
            print("Failed to read frame.")
            break
        
        frame = cv2.resize(frame, (640, 480))
        gray = cv2.cvtColor(frame, cv2.COLOR_RGB2GRAY)

        # Detect people using HOG
        boxes, weights = hog.detectMultiScale(frame, winStride=(8, 8))

        # Bounding box coordinates
        boxes = np.array([[x, y, x + w, y + h] for (x, y, w, h) in boxes])

        for (xA, yA, xB, yB) in boxes:
            cv2.rectangle(frame, (xA, yA), (xB, yB), (0, 255, 0), 2)
            
            # Extract region of interest (ROI)
            roi = frame[yA:yB, xA:xB]

            # Ensure ROI has a valid size
            if roi.size > 0:
                try:
                    gender = multiResponse(roi)

                    # Add information on the frame
                    label = f"{gender}, Injury: {'Yes' if injury_detected else 'No'}"
                    cv2.putText(frame, label, (xA, yA - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                    
                except Exception as e:
                    print(f"Error processing ROI: {e}")

        # Save frame to output video
        out.write(frame.astype('uint8'))

        cv2.imshow('frame', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    cv2.waitKey()


if __name__ == "__main__":
    main()
