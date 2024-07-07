import React from 'react';

const BookList = ({ books, saveBook }) => (
  <div>
    {books.map((book) => (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <img src={book.image} alt={book.title} />
        <a href={book.link} target="_blank" rel="noopener noreferrer">More Info</a>
        <button onClick={() => saveBook(book.id)}>Save</button>
      </div>
    ))}
  </div>
);

export default BookList;