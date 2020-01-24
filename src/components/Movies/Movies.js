import React, { Component, Suspense } from "react";
import services from "../services/services";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
const HomePage = React.lazy(() => import("./HomePage/HomePage"));
const MoviesPage = React.lazy(() => import("./MoviesPage/MoviesPage"));
const MovieDetailsPage = React.lazy(() =>
  import("./MovieDetailsPage/MovieDetailsPage")
);

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
            <Suspense fallback={<div>Загрузка...</div>}>
              <Route path="/" exact>
                <HomePage exact data={this.state.movies} />
              </Route>
              <Route exact path="/movies" component={MoviesPage} />
              <Route exact path="/movies/:id" component={MovieDetailsPage} />
            </Suspense>

            <Redirect from="/movies/:id/cast" to="/movies/:id" />
            <Redirect from="/movies/:id/reviews" to="/movies/:id" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Movies;
