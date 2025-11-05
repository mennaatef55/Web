import React from "react";

function MovieList({ movies, onRemove }) {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies added yet 🎞️</p>
      ) : (
        movies.map((movie, index) => (
          <div className="movie-item" key={index}>
            <h3>{movie.title}</h3>
            <p>Rating: {"⭐".repeat(movie.rating)}</p>
            {movie.comment && (
              <p>
                <strong>Review:</strong> {movie.comment}
              </p>
            )}
            <button onClick={() => onRemove(movie.title)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;
