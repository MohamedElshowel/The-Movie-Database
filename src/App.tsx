import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import MoviesList from "./components/moviesList/MoviesList";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Footer from "./components/footer/Footer";

function App() {
  const apiKey = "4f298a53e552283bee957836a529baec";

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/movie/:movieId">
          <MovieDetails apiKey={apiKey} />
        </Route>
        <Route path="/">
          <MoviesList apiKey={apiKey} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
