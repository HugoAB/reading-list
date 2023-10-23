import React from 'react'

const NumPagesFilter = ({ numOfPages, handleNumOfPagesChange }) => {
  return (
    <div className='pagesFilter'>
      <label htmlFor="numPages">Filtar por páginas</label>
      <input
        type="range"
        min="1"
        max="1200"
        id="numPages"
        defaultValue="0"
        onChange={handleNumOfPagesChange}
      />
      <span>{numOfPages}</span>
    </div>
  )
}

export default NumPagesFilter