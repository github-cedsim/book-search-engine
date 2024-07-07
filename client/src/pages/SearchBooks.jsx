// client/src/pages/SearchBooks.jsx

import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BOOKS } from '../utils/queries';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState('');

  const { loading, data } = useQuery(QUERY_BOOKS, {
    variables: { title: searchInput },
    skip: !searchInput,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // The query will automatically run because of the useQuery hook
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search for a book"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button type="submit">Submit Search</Button>
      </form>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Row>
          {data?.books?.map((book) => (
            <Col key={book._id} md="4">
              <Card border="dark">
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant="top" /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors.join(', ')}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button href={book.link} target="_blank">
                    View Book
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SearchBooks;