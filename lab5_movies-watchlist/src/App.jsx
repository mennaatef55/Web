import React, { useState } from "react";
import MovieForm from "./MovieForm.jsx";
import MovieList from "./MovieList.jsx";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);


  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };


  const removeMovie = (title) => {
    setMovies(movies.filter((m) => m.title !== title));
  };

  return (
    <div className="app-container">
      <h1>🎬 My Movie Watch List</h1>
      <MovieForm onAddMovie={addMovie} />
      <MovieList movies={movies} onRemove={removeMovie} />
    </div>
  );
}

export default App;
