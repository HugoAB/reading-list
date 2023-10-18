import React from 'react'
import BookItem from './BookItem'

const BooksList = ({ books }) => {
  return (
    <div className='booksList'>
      {books.map(b => (
        <BookItem data={b} />
      ))}
    </div>
  )
}

export default BooksList