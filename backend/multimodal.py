import PIL.Image
import google.generativeai as genai

def describe(path):
    genai.configure(api_key="AIzaSyDaPGbKw38d7GP8q8dAgxPh1sd9Vs5sn08")

    sample_file_1 = PIL.Image.open(image_path_1)

    #Choose a Gemini model.
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")

    prompt = "Describe the image in exactly one sentence and not more. Make sure to tell me whether the person is under distress or not."

    response = model.generate_content([prompt, sample_file_1])

    return response.text

image_path_1 = "/Users/apendela10/Downloads/test.jpeg"
print(describe(image_path_1))
