const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTrendingMovies = async () =>{
    const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const getMovies = async (query) =>{
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
}

export const getMoviesDetails = async (id) =>{
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
}

export const getSimilarMovies = async (id) =>{
    const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const getUpcomingMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await res.json();
    return data.results;
}

export const getTrendingTVShows = async () =>{
    const res = await fetch(`${BASE_URL}/trending/tv/day?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const getSimilarTvshow = async (id) => {
    const res = await fetch(`${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const getTvshowDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
}

