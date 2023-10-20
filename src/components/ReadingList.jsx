import React from 'react'
import ReadingListItem from './ReadingListItem'

const ReadingList = ({ readingList, deleteBookFromList }) => {
  return (
    <div className='readingList'>
      <h2>Lista de lectura</h2>
      <div className='list'>
        {readingList.map(book => (
          <ReadingListItem
          key={book.ISBN} 
          book={book}
          deleteBookFromList={deleteBookFromList}
        />
        ))}
      </div>
    </div>
  )
}

export default ReadingList