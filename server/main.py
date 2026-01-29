import os
import pickle
from typing import Optional, List, Dict, Any, Tuple

import numpy as np
import pandas as pd
import httpx
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
TMDB_BASE_URL = os.getenv("TMDB_BASE_URL")
TMDB_IMG_500 = os.getenv("TMDB_IMG_500")


if not TMDB_API_KEY:
    raise RuntimeError("TMDB_API_KEY missing. Put it in .env as TMDB_API_KEY=xxxx")


app = FastAPI(title='Movie Recommender API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

DF_PATH = os.path.join(BASE_DIR,"df.pkl")
INDICES_PATH = os.path.join(BASE_DIR,"indices.pkl")
TFIDF_MATRIX_PATH = os.path.join(BASE_DIR,"tfidf_matrix.pkl")
TFIDF_PATH = os.path.join(BASE_DIR,"tfidf.pkl")

df: Optional[pd.DataFrame] = None
indices_obj: Any = None
tfidf_matrix: Any = None
tfidf_obj: Any = None

TITLE_TO_IDX: Optional[Dict[str,int]] = None



class TMDBMovieCard(BaseModel):
    tmdb_id:int
    title:str
    poster_url: Optional[str] = None
    release_date: Optional[str] = None
    vote_average: Optional[float] = None

class TMDBMovieDetails(BaseModel):
    tmdb_id:int
    title:str
    overview: Optional[str] = None
    poster_url: Optional[str] = None
    backdrop_url: Optional[str] = None
    release_date: Optional[str] = None
    genres: List[dict] = None

class TFIDFRecItem(BaseModel):
    title: str
    score: float
    tmdb: Optional[TMDBMovieCard] = None

class SearchBundleResponse(BaseModel):
    query: str
    movie_details: TMDBMovieDetails
    tfidf_recommendations: List[TFIDFRecItem]
    genre_recommendations: List[TMDBMovieCard]

