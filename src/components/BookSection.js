import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './BookList';
import Form from './BookForm';

const BookSection = () => {
  const books = useSelector((state) => state.book);
  return (
    <>
      <Booklist books={books} />
      <Form />
    </>
  );
};
export default BookSection;
