import React, { Component } from "react";
import services from "../../services/services";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
const defaultImgURL = "https://image.tmdb.org/t/p/w300/";

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    reviews: [],
    actors: []
  };

  componentDidMount = async () => {
    await services.getDetailsById(this.props.location.state.id).then(data => {
      this.setState({ movie: data.data });
    });
  };

  handleCast = () => {
    services.getActorsById(this.props.location.state.id).then(data => {
      this.setState({ actors: data.data });
    });
  };

  handleReviews = () => {
    services.getReviewsById(this.props.location.state.id).then(data => {
      this.setState({ reviews: data.data });
    });
  };

  render() {
    const { movie } = this.state;
    return (
      movie.length !== 0 && (
        <>
          <BrowserRouter>
            <div>
              <img
                src={`${defaultImgURL}${movie.poster_path}`}
                alt="movie-posters"
              />
              <h1>{movie.original_title}</h1>
              <p>User score: {Math.round(movie.popularity)}%</p>
              <h2>Overview:</h2>
              <p>{movie.overview}</p>
              <h2>Genres:</h2>

              <span>{movie.genres[0].name}</span>
              <hr />
              <h3>Additional information</h3>
              <Link to={`/movies/${movie.id}/cast`} onClick={this.handleCast}>
                Cast
              </Link>
              <Link
                to={`/movies/${movie.id}/reviews`}
                onClick={this.handleReviews}
              >
                Reviews
              </Link>
              <hr />
              <Switch>
                <Route
                  exact
                  path="/movies/:id/cast"
                  render={() => <Cast actors={this.state.actors} />}
                />
                <Route
                  exact
                  path="/movies/:id/reviews"
                  render={() => <Reviews reviews={this.state.reviews} />}
                />
              </Switch>
            </div>
          </BrowserRouter>
        </>
      )
    );
  }
}

export default MovieDetailsPage;
