import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './styles/App.css';
import ListView from "./views/ListView";
import DetailsView from "./views/DetailsView";
import useList from "./hooks/useList";

function App() {
  const navigate = useNavigate();

  const [state, dispatch] = useList();

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
