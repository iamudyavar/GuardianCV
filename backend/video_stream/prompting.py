import boto3
import json
import base64
from botocore.exceptions import ClientError

def read_image_to_base64(image_path):
    """Read an image file and convert it to a Base64 string."""
    with open(image_path, "rb") as image_file:
        return base64.b64encode(image_file.read()).decode("utf-8")

def describe_image(image_path):
    """Describe an image using the Claude model on Bedrock."""
    client = boto3.client("bedrock-runtime", region_name="us-east-1")
    model_id = "anthropic.claude-3-haiku-20240307-v1:0"

    # Read and encode the image
    image_base64 = read_image_to_base64(image_path)

    # Format the request with the image
    native_request = {
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 512,
        "temperature": 0.5,
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "This person is a patient in a hospital waiting room. They may be a patient who is in need of care or they may be a person waiting with the patient who is medically fine. Regardless of who they are, give this person in the picture a score between 1 to 5 based on some criteria. 1 meaning they are in immediate life threatening need of care. 2 meaning that they are in an emergency and this could become life threatening. 3 meaning that they are in need of urgent care. 4 meaning that they are in need of semi urgent care. 5 meaning that they are not in need of care or it cannot be identified. Output only a number based on your judgement of the person in the image. If you are unsure, assume 5. Your output should be one number, for example: 4. Do not output anything else."
                    },
                    {
                        "type": "image",
                        "source": {
                            "type": "base64",
                            "media_type": "image/jpeg",
                            "data": image_base64,
                        },
                    },
                ],
            }
        ],
    }

    request = json.dumps(native_request)

    try:
        # Invoke the model
        response = client.invoke_model(modelId=model_id, body=request)
    except (ClientError, Exception) as e:
        print(f"ERROR: Can't invoke '{model_id}'. Reason: {e}")
        return None

    # Decode and process the response
    model_response = json.loads(response["body"].read())
    response_text = model_response["content"][0]["text"]
    return response_text

# Example usage
if __name__ == "__main__":
    image_path = "/Users/apendela10/Downloads/person_1.jpg"
    description = describe_image(image_path)
    print("Image Description:", description)