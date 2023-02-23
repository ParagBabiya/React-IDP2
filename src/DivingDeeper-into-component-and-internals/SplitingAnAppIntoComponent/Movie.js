import React from 'react'

const Movie = (props) => {

const movies= props.movies;

  return (
    <div>
       <ul>
       {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movie
