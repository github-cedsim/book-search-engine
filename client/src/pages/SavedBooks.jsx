import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);

  const userData = data?.me || {};

  const handleDeleteBook = async (bookId) => {
    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

      // Update user data in state if needed

    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Saved Books</h2>
      <div>
        {userData.savedBooks.map((book) => (
          <div key={book.bookId}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => handleDeleteBook(book.bookId)}>
              Remove This Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedBooks;