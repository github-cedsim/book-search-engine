import axios from 'axios';

// Function to search for books using Google Books API
export const searchGoogleBooks = (query) => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

  // Function to sign up a new user
  export const signupUser = (userData) => {
    return axios.post('/api/users/signup', userData);
  };
  
  // Function to log in a user
  export const loginUser = (userData) => {
    return axios.post('/api/users/login', userData);
  };
  
  // Function to save a book to the user's account
  export const saveBook = (bookData, token) => {
    return axios.post('/api/books', bookData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  
  // Function to get saved books
  export const getSavedBooks = (token) => {
    return axios.get('/api/books', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  
  // Function to remove a saved book
  export const removeBook = (bookId, token) => {
    return axios.delete(`/api/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };