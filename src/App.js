import React, { useEffect, useState } from 'react';
import './style.css';
import BooksList from './components/BooksList';
import data from './books.json';
import ReadingList from './components/ReadingList';
import NumPagesFilter from './components/NumPagesFilter';
import GenreFilter from './components/GenreFilter';

export default function App() {
  const [books, setBooks] = useState(data.library);
  const [readingList, setReadingList] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [genre, setGenre] = useState("Todos");

  const numOfPagesChangeHandler = (e) => {
    setNumOfPages(e.target.value);
  }

  const genreChangeHandler = (e) => {
    setGenre(e.target.value);
  }

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

  const genresSet = new Set(books.map(book => book.book.genre));
  const genres = Array.from(genresSet);

  let filteredBooks = [];
  if(numOfPages > 0 || genre) {
    filteredBooks = books.filter(book => book.book.genre === genre || book.book.pages <= numOfPages);
  }

  const listOfBooks = filteredBooks;
  console.log(listOfBooks)

  return (
    <>
      <h1>{books.length} disponibles en la lista</h1>
      {readingList.length > 0 && (
        <p className='subtitle'>{readingList.length} en la lista de lectura</p>
      )}
      <div className='filters'>
        <NumPagesFilter numOfPages={numOfPages} handleNumOfPagesChange={numOfPagesChangeHandler} />
        <GenreFilter genres={genres} handleGenreChange={genreChangeHandler} />
      </div>
      <div className='content'>
        <BooksList books={filteredBooks.length > 0 ? filteredBooks : books} addBookToList={addBookToList} />
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
