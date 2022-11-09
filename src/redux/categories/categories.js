const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const initialState = [];
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case CHECK_STATUS:
      return 'In Development';

    default:
      return state;
  }
};

export default categoriesReducer;
