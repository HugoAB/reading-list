import React from 'react'

const BookItem = ({ book, addBookToList }) => {
  
  return (
    <div className='bookItem' onClick={() => addBookToList(book)}>
      <img src={book.cover} alt={book.title} />
      <div className='overlay'>
        <p className='text'>Add to Reading List</p>
      </div>
      <div className='bookDetails'>
        <p className='title'>{book.title}</p>
        <p className='author'>{book.author.name}</p>
      </div>
    </div>
  )
}

export default BookItem