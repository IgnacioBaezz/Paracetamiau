from google import genai
from decouple import config

API_KEY = config("API_KEY")

client = genai.Client(api_key=API_KEY)

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Explica como funciona la IA en algunas palabras"
)
print(response.text)