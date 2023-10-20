import React from 'react'

const ReadingListItem = ({ book, deleteBookFromList }) => {
  
  return (
    <div className='listItem'>
      <span className='deleteBtn' onClick={() => deleteBookFromList(book.ISBN)} >X</span>
      <img src={book.cover} alt={book.title} />
      <div className='bookDetails'>
        <p className='title'>{book.title}</p>
        <p className='author'>{book.author.name}</p>
      </div>
    </div>
  )
}

export default ReadingListItem