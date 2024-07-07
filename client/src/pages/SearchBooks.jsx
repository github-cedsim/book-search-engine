import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
import { searchGoogleBooks } from '../utils/API';
import Auth from '../utils/auth';

const SearchBooks = () => {
  const [saveBook] = useMutation(SAVE_BOOK);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        link: book.volumeInfo.infoLink,
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    if (Auth.loggedIn()) {
      try {
        const { data } = await saveBook({
          variables: { ...bookToSave },
        });

        // Update saved books in state if needed

      } catch (err) {
        console.error(err);
      }
    } else {
      console.log('Please log in to save books.');
    }
  };

  return (
    <>
      <div className="search-form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Search for a book"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">Submit Search</button>
        </form>
      </div>

      <div className="results">
        {searchedBooks.map((book) => (
          <div key={book.bookId}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => handleSaveBook(book.bookId)}>
              Save This Book!
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBooks;