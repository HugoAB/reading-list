import React, { useState } from 'react';
import './style.css';
import BooksList from './components/BooksList';
import data from './books.json';
import ReadingList from './components/ReadingList';

export default function App() {
  const [books, setBooks] = useState(data.library);
  const [readingList, setReadingList] = useState([]);

  const addBookToList = (book) => {
    let bookExist = false;
    if(readingList.length > 0) {
      bookExist = readingList.some(b => b.ISBN === book.ISBN);
    }
    
    if(bookExist) {
      alert(`El libro ya ${book.title} ya está en tu lista!`);
      return;
    }
    setReadingList([...readingList, book]);
  }

  const deleteBookFromList = (ISBN) => {
    const newList = readingList.filter(book => book.ISBN !== ISBN);
    setReadingList(newList);
  }

  return (
    <>
      <h1>{books.length} disponibles en la lista</h1>
      {readingList.length > 0 && (
        <p className='subtitle'>{readingList.length} en la lista de lectura</p>
      )}
      <div className='content'>
        <BooksList books={books} addBookToList={addBookToList} />
        {readingList.length > 0 && (
          <ReadingList 
            readingList={readingList}
            deleteBookFromList={deleteBookFromList}
          />
        )}
      </div>
    </>
  );
}
