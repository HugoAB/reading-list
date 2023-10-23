import React, { useState } from 'react'

const Filters = ({ genres }, ref) => {
  // const [numPagesFilter, setNumPagesFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("");


  // const numPagesChangeHandler = (e) => {
  //   setNumPagesFilter(e.target.value);
  // }

  // const genreChangeHandler = (e) => {
  //   setGenreFilter(e.target.value);
  // }

  return (
    <div className="filters">
      <div>
        <label htmlFor="numPages">Filtar por páginas</label>
        <input
          type="range"
          min="1"
          max="1200"
          id="numPages"
          // value={numPagesFilter}
          defaultValue="1"
          onChange={numPagesChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="genre">Filtar por género</label>
        <select id="genre" onChange={genreChangeHandler} defaultValue="Género">
          <option value="Género" disabled >Género</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters