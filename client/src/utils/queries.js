import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// Other queries (like QUERY_BOOKS) should also be included here
export const QUERY_BOOKS = gql`
  query books($title: String!) {
    books(title: $title) {
      _id
      authors
      description
      title
      image
      link
    }
  }
`;