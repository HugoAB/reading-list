import React, { useState } from 'react';
import './style.css';
import BooksList from './components/BooksList';
import data from './books.json';
import ReadingList from './components/ReadingList';

export default function App() {
  const [books, setBooks] = useState(data.library);
  const [readingList, setReadingList] = useState([]);

  return (
    <>
      <h1>{books.length} disponibles en la lista</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className='content'>
        <BooksList books={books} />
        {readingList.length > 0 && (
          <ReadingList />
        )}
      </div>
    </>
  );
}
