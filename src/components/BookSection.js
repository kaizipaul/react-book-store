import React from 'react';
import Booklist from './BookList';
import Form from './BookForm';

const BookSection = () => {
  const allbooks = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
    },
    {
      id: 2,
      title: 'Origin',
      author: 'Dan Brown',
    },
    {
      id: 3,
      title: 'Winds of Winter',
      author: 'George R. R. Martin',
    },
  ];

  return (
    <>
      <Booklist books={allbooks} />
      <Form />
    </>
  );
};
export default BookSection;
