function bloodMask = segmentBlood(imagePath)
    % segmentBlood: Segment possible visual blood in a given image.
    %
    % INPUT:
    %   - imagePath: Path to the image file (string).
    %
    % OUTPUT:
    %   - bloodMask: Binary mask where blood-like regions are marked as 1.
    
    % Read the image
    img = imread(imagePath);
    
    % Convert image to HSV color space
    hsvImg = rgb2hsv(img);
    
    % Extract HSV channels
    H = hsvImg(:,:,1); % Hue
    S = hsvImg(:,:,2); % Saturation
    V = hsvImg(:,:,3); % Value
    
    % Define thresholds for blood-like colors
    hueMin = 0;    % Lower bound for red hue
    hueMax = 0.1;  % Upper bound for red hue
    satMin = 0.5;  % Minimum saturation
    valMin = 0.2;  % Minimum brightness
    
    % Create binary mask based on thresholds
    bloodMask = (H >= hueMin & H <= hueMax) & (S >= satMin) & (V >= valMin);
    
    % Perform morphological operations to clean up the mask
    bloodMask = imfill(bloodMask, 'holes');       % Fill holes in the mask
    bloodMask = bwareaopen(bloodMask, 50);       % Remove small objects
    
    % Optional: Visualize the results
    figure;
    subplot(1, 3, 1), imshow(img), title('Original Image');
    subplot(1, 3, 2), imshow(bloodMask), title('Blood Segmentation Mask');
    bloodOverlay = img;
    bloodOverlay(repmat(bloodMask, [1 1 3])) = 255;
    subplot(1, 3, 3), imshow(bloodOverlay), title('Overlay on Original Image');
end
