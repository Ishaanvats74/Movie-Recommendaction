from typing import Union
import os
from fastapi import FastAPI
import requests
from dotenv import load_dotenv
import joblib
import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

load_dotenv()
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
TMDB_BASE_URL = os.getenv("TMDB_BASE_URL")

df = pd.read_pickle("df.pkl")
tfidf_matrix = joblib.load("tfidf_matrix.pkl")
indices = joblib.load("indices.pkl")


app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/movie")
def read_item():
    url = f"https://api.themoviedb.org/3/trending/movie/day?api_key=6c1567830d5d0641e7bde29158ffc22d"
    headers = {"accept": "application/json"}
    response = requests.get(url,headers=headers)    
    return response.json()

@app.get("/detail/{id}")
def read_item(id:int):
    url = f"https://api.themoviedb.org/3/movie/{id}?api_key=6c1567830d5d0641e7bde29158ffc22d"
    headers = {"accept": "application/json"}
    response = requests.get(url,headers=headers)
    response = response.json()    
    return response


@app.get("/recommend_live/{movie_id}")
def recommend_live(movie_id: int, n: int = 10):

    # 1️⃣ Get selected movie
    movie_url = f"{TMDB_BASE_URL}/movie/{movie_id}?api_key={TMDB_API_KEY}"
    movie_data = requests.get(movie_url).json()

    if "overview" not in movie_data:
        return {"error": "Movie not found"}

    selected_text = build_text(movie_data)

    # 2️⃣ Get candidate movies (example: popular movies page 1-3)
    candidates = []

    for page in range(1, 4):
        url = f"{TMDB_BASE_URL}/movie/popular?api_key={TMDB_API_KEY}&page={page}"
        data = requests.get(url).json()
        candidates.extend(data["results"])

    # 3️⃣ Build text corpus
    texts = [selected_text]
    movie_ids = []

    for movie in candidates:
        movie_ids.append(movie["id"])
        detail_url = f"{TMDB_BASE_URL}/movie/{movie['id']}?api_key={TMDB_API_KEY}"
        detail = requests.get(detail_url).json()
        texts.append(build_text(detail))

    # 4️⃣ Vectorize on the fly
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity

    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf = vectorizer.fit_transform(texts)

    sim_scores = cosine_similarity(tfidf[0], tfidf[1:]).flatten()

    similar_idx = sim_scores.argsort()[::-1][:n]

    recommended_ids = [movie_ids[i] for i in similar_idx]

    return {"recommendations": recommended_ids}

def build_text(movie):
    overview = movie.get("overview", "")
    tagline = movie.get("tagline", "")
    genres = " ".join([g['name'] for g in movie.get("genres", [])])
    return f"{overview} {genres} {tagline}"



