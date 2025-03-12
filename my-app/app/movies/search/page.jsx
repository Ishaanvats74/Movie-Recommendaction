
import React from "react";
import { getMovies } from "@/utils/request";
import SearchResults from "@/app/Components/SearchResults";



async function search_page({searchParams}) {
   const searchText = searchParams.query;
   const movies = await getMovies(searchText);

  return (
    <>
    <SearchResults searchText={searchText} movies={movies}/>
    </>
  )
};

export default search_page