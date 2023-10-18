import React from 'react'

const BookItem = ({ data }) => {
  const book = data.book;

  return (
    <div className='bookItem'>
      <img src={book.cover} alt={book.title} />
      <div>
        <p className='title'>{book.title}</p>
        <p className='author'>{book.author.name}</p>
      </div>
    </div>
  )
}

export default BookItem