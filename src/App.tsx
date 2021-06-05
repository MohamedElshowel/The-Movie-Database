import React from "react";
import "./style/colors.scss";
import "./style/App.scss";
import Header from "./components/header/Header";
import MoviesList from "./components/moviesList/MoviesList";

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
    </div>
  );
}

export default App;
