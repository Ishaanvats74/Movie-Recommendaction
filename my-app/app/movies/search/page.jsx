
import React from "react";
import { getMovies } from "@/utils/request";
import SearchResults from "@/Components/searchResults";



async function search_page({params}) {
   const searchText = params.query;
   const movies = await getMovies(searchText);

  return (
    <>
    <SearchResults searchText={searchText} movies={movies}/>
    </>
  )
};

export default search_page