export default function reducer(state, action) {
  const localList = JSON.parse(localStorage.getItem("uniList"));
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
      const restOfList = localList.filter((uni) => uni.name !== action.payload);
      return {
        ...state,
        list: restOfList,
      };

    case 'SEARCH_LIST':
      const filteredList = localList.filter(
        (uni) => (uni.name.toLowerCase().search(action.payload.toLowerCase()) > -1)
      );
      return {
        ...state,
        list: filteredList,
      };

    case 'SORT_LIST':
      const sortedList = state.list.sort((a, b) => (a.name < b.name) ? -1 : 1);
      return {
        ...state,
        list: sortedList,
      };

    case 'RESET_LIST':
      return {
        ...state,
        list: localList,
      }

    default:
      return state;
  };
}