import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const reducer = combineReducers({
  book: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
},
applyMiddleware(thunk));

export default store;
