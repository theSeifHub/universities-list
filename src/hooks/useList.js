import { useEffect, useReducer } from "react";
import reducer from "../reducer";

const initialState = {
  list: [],
  viewUniversity: null,
  loading: false,
};

const useList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING", payload: true });
      let fetchedData = [];
      const localList = JSON.parse(localStorage.getItem("uniList"));
      if (localList) {
        fetchedData = localList;
      } else {
        const response = await fetch("http://universities.hipolabs.com/search?country=United%20Arab%20Emirates");
        const parsedData = await response.json();
        localStorage.setItem("uniList", JSON.stringify(parsedData));
        fetchedData = parsedData;
      }
      dispatch({ type: "INIT_DATA", payload: fetchedData });
      dispatch({ type: "LOADING", payload: false });
    }

    fetchData();
  }, []);

  return [state, dispatch];
}

export default useList;