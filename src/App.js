import React, { useEffect, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './styles/App.css';
import reducer from "./reducer";
import ListView from "./views/ListView";
import DetailsView from "./views/DetailsView";

function App() {
  const initialState = {
    list: [],
    viewUniversity: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

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

  const handleSearchList = (keyword) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "SEARCH_LIST", payload: keyword });
    dispatch({ type: "LOADING", payload: false });
  };

  const handleSortList = () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "SORT_LIST" });
    dispatch({ type: "LOADING", payload: false });
  };

  const handleResetList = () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "RESET_LIST" });
    dispatch({ type: "LOADING", payload: false });
  };

  const handleItemClick = (univData) => {
    dispatch({ type: "VIEW_UNIVERSITY", payload: univData });
    navigate(`/${univData.domains[0]}`);
  };

  const handleItemDelete = (name) => {
    dispatch({ type: "DELETE_UNIVERSITY", payload: name });
    navigate("/");
  };

  return (
    <div className="app">
      {state.loading ? (
        <div className="spinner" title="Loading..."></div>
      ) : (
        <Routes>
          <Route
            index path="/"
            element={
              <ListView
                list={state.list}
                onSearchList={handleSearchList}
                onSortList={handleSortList}
                onResetList={handleResetList}
                onClickItem={handleItemClick}
                onDeleteItem={handleItemDelete}
                isLoading={state.loading}
              />
            }
          />
          <Route path="/:id" element={<DetailsView university={state.viewUniversity} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
