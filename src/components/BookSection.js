import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Booklist from './BookList';
import { getbooks } from '../redux/books/books';
import Form from './BookForm';

const BookSection = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbooks());
  }, []);
  return (
    <>
      <Booklist books={books} />
      <Form />
    </>
  );
};
export default BookSection;
