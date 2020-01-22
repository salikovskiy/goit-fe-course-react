import React, { Component } from "react";
import services from "../services/services";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";

class Movies extends Component {
  state = {
    movies: [],
    id: null,
    movie: []
  };

  componentDidMount() {
    services.getBestOfTheDay().then(data => {
      this.setState({ movies: data.data.results });
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
          </ul>
          <Switch>
            <Route path="/" exact>
              <HomePage exact data={this.state.movies} />
            </Route>

            <Route exact path="/movies">
              <MoviesPage />
            </Route>
            <Route exact path="/movies/:id" component={MovieDetailsPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Movies;
