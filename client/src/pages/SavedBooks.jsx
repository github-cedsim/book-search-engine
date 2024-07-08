import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  const userData = data?.me || {};

  if (!userData?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeBook({
        variables: { bookId },
      });

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="jumbotron text-center">
        <h1>Viewing saved books!</h1>
      </div>
      <div className="container">
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <div className="row">
          {userData.savedBooks.map((book) => {
            return (
              <div key={book.bookId} className="col-md-4 mb-3">
                <div className="card">
                  {book.image && <img src={book.image} alt={`The cover for ${book.title}`} className="card-img-top" />}
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Authors: {book.authors.join(', ')}</p>
                    <p className="card-text">{book.description}</p>
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View on Google Books
                    </a>
                    <button className="btn btn-danger ml-2" onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SavedBooks;