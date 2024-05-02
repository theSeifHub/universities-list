import React, { useEffect, useReducer } from "react";
import './App.css';
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const fetchData = async () => {
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
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Universities List</h1>
      </header>

    </div>
  );
}

export default App;
