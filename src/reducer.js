export default function reducer(state, action) {
  switch (action.type) {
    case 'INIT_DATA':
      return {
        ...state,
        list: action.payload,
      };

    case 'VIEW_UNIVERSITY':
      return {
        ...state,
        viewUniversity: action.payload,
      };

    case 'DELETE_UNIVERSITY':
      const restOfList = state.list.filter((uni) => uni.name !== action.payload);
      localStorage.setItem('uniList', JSON.stringify(restOfList));
      return {
        ...state,
        list: restOfList,
      };
    case 'SEARCH_LIST':
    case 'SORT_LIST':
    default:
      return state;
  };
}