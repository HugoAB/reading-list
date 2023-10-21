import React from 'react'
import BookItem from './BookItem'

const BooksList = ({ books, addBookToList }) => {
  
  return (
    <>
      <div className='booksList'>
        {books.map(b => (
          <BookItem 
            key={b.book.ISBN} 
            book={b.book}
            addBookToList={addBookToList}
          />
        ))}
      </div>
    </>
  )
}

export default BooksList