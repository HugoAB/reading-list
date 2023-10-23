import React from 'react'

const GenreFilter = ({ genres, handleGenreChange }) => {
  return (
    <div className='genresFilter'>
      <label htmlFor="genre">Filtar por género</label>
      <select id="genre" defaultValue="Todos" onChange={handleGenreChange}>
        <option value="Todos" >Todos</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  )
}

export default GenreFilter