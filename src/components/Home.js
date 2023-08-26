 import React from "react";
 import MovieList from "./MovieList";

 function Home({ filteredMovies }) {
   return (
     <div>
       <MovieList movies={filteredMovies} />
     </div>
   );
 }

 export default Home;
