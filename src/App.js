import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

import Login from "./components/Login";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import sampleMoviesData from "./data/sampleMoviesData";

function App() {
  const [filteredMovies, setFilteredMovies] = useState(sampleMoviesData);

  const handleSearch = (searchTerm) => {
    const filtered = sampleMoviesData.filter((movie) =>
      movie.movieDetails.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <Home
                filteredMovies={filteredMovies}
                handleSearch={handleSearch}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ filteredMovies, handleSearch }) {
  return (
    <div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
