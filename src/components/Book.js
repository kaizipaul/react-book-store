import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div className="book-container">
      <ul className="book-list">
        <li>{title}</li>
        <li>Written By</li>
        <li>{author}</li>
      </ul>
      <button className="remove-button" type="button">Remove</button>
    </div>

  );
};

Book.propTypes = ({
  title: PropTypes.string,
  author: PropTypes.string,
}).isRequired;

export default Book;