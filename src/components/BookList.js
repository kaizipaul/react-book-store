import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Booklist = (props) => {
  const { books } = props;

  return (
    <ul className="booklist">
      {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
    </ul>

  );
};

Booklist.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ).isRequired,
};

export default Booklist;