import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/J24AiHVbjsRSy0mbmbHF/books';

const initialState = [];

const getFromApi = async () => {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const books = await response.json();
  const booksData = Object.keys(books).map((id) => ({
    id,
    title: books[id][0].title,
    author: books[id][0].author,
  }));
  return booksData;
};

export const fetchBooks = createAsyncThunk(GET_BOOKS, async () => {
  const payload = await getFromApi();
  return payload;
});

export const addbook = createAsyncThunk(
  ADD_BOOK,
  async ({
    id, title, author, category,
  }) => {
    await axios.post(apiUrl, {
      item_id: id,
      title,
      author,
      category,
    });
    return {
      id, title, author, category,
    };
  },
);

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (payload) => {
  await axios.delete(`${apiUrl}/${payload}`);
  return payload;
});

export const getbooks = () => (async (dispatch) => {
  const booksData = await getFromApi();
  dispatch({
    type: GET_BOOKS,
    payload: booksData,
  });
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default bookReducer;
