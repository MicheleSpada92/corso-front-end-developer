import { Component, useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import OMDB_URL from "../helpers/omdbURL";

const MovieList = props => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);

  const fetchSearchResult = async () => {
    try {
      const response = await fetch(OMDB_URL + "&s=" + props.searchString);
      if (response.ok) {
        const data = await response.json();
        if (data.Response === "True") {
          setSearchResults(data.Search);
          setError(false);
        } else {
          setError(true);
        }
      } else {
        setError(true);
        console.log("an error occurred");
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.searchString) {
      fetchSearchResult();
    } else {
      setSearchResults([]);
      setError(true);
    }
  }, [props.searchString]);

  // componentDidUpdate = async prevProps => {
  //   if (prevProps.searchString !== this.props.searchString) {
  //     if (this.props.searchString === "") {
  //       this.setState({ error: false, searchResults: [] });
  //     } else {
  //       this.fetchSearchResult();
  //     }
  //   }
  // };

  return (
    <>
      <h4>{props.title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
        {props.loading
          ? [...Array(6).keys()].map(movie => (
              <div className="spinner-container" key={movie}>
                <Spinner animation="border" variant="light" />
              </div>
            ))
          : props.movies &&
            props.movies.map(movie => (
              <SingleMovie
                data={movie}
                key={movie.imdbID}
                selectedMovieId={props.selectedMovieId}
                changeSelectedMovieId={props.changeSelectedMovieId}
              />
            ))}
        {searchResults.map(movie => (
          <SingleMovie
            data={movie}
            key={movie.imdbID}
            selectedMovieId={props.selectedMovieId}
            changeSelectedMovieId={props.changeSelectedMovieId}
          />
        ))}
      </Row>
    </>
  );
};

export default MovieList;
