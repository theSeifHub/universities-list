export default function reducer(state, action) {
  switch (action.type) {
    case 'INIT_DATA':
      return action.payload;
    case 'SEARCH_LIST':
    case 'SORT_LIST':
    case 'DELETE_ITEM':
    default:
      return state;
  };
}