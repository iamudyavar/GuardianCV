import PIL.Image
import google.generativeai as genai

def describe(path):
    genai.configure(api_key="AIzaSyDaPGbKw38d7GP8q8dAgxPh1sd9Vs5sn08")

    sample_file_1 = PIL.Image.open(path)

    #Choose a Gemini model.
    model = genai.GenerativeModel(model_name="gemini-1.5-flash")

    prompt = """
    Instructions:
        1.) You are a vision tool to assess the conditions of people coming into the hospital
        2.) Take multiple factors into account, such as abnormal behaviour, patient injury, distress form those around a patient
        3.) Using the factors extracted then I want you to scale from 5 being the best in condition, and 1 being in a severe case in terms of medical health
        4.) When evaluating between the extremes 1 and 5 use preiexisting knowledge on what could be considered a basic injury.
        5.) RETURN NOTHING BUT AN INTEGER VALUE FROM 1-5 
    """

    response = model.generate_content([prompt, sample_file_1])
    print(f"Severity Found: {response}")
    return response.text[0]

#image_path_1 = "/Users/apendela10/Downloads/test.jpeg"
#print(describe(image_path_1))
