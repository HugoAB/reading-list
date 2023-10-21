import React from 'react'

const Filters = ({ genres }) => {
  return (
    <div className="filters">
      <div>
        <label htmlFor="numPages">Filtar por páginas</label>
        <input 
          type="range" 
          min="1"  
          max="500"
          id="numPages"
        />
      </div>
      <div>
        <label htmlFor="genre">Filtar por género</label>
        <select id="genre">
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters