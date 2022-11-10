import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addbook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: nanoid(),
      title,
      author,
    };
    setTitle('');
    setAuthor('');
    dispatch(addbook(book));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input className="book-title-input" type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="book-title-input" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Form;
