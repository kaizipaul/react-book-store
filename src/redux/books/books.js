const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialState = [];

export const addbook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};

export default bookReducer;
