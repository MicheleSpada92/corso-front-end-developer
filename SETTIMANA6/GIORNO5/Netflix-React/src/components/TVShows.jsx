import { Component, useEffect, useState } from "react";
import { Container, Alert, Dropdown, Row, Col } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import MovieList from "./MovieList";
import CommentArea from "./CommentArea";
import OMDB_URL from "../helpers/omdbURL";

const TVShows = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState("");

  const fetchMovies = () => {
    fetch(OMDB_URL + "&s=lost&type=series")
      .then(response => response.json())
      .then(responseObject => {
        if (responseObject.Response === "True") {
          setGallery(responseObject.Search);
        } else {
          setError(true);
        }
      })
      .then(() => setLoading(false))
      .catch(err => {
        setError(true);
        console.log("An error has occurred:", err);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <MyNavbar
        showSearchResult={searchString => {
          setSearchString(searchString);
        }}
      />
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="ml-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle
                  style={{ backgroundColor: "#221f1f" }}
                  id="dropdownMenuButton"
                  className="btn-secondary btn-sm dropdown-toggle rounded-0"
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu bg="dark">
                  <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        <Row>
          <Col md={8}>
            {error && (
              <Alert variant="danger" className="text-center">
                An error has occurred, please try again!
              </Alert>
            )}
            {searchString.length > 0 && (
              <MovieList
                title="Search results"
                searchString={searchString}
                selectedMovieId={selectedMovieId}
                changeSelectedMovieId={movieId => setSelectedMovieId(movieId)}
              />
            )}
            {!error && !searchString > 0 && (
              <>
                <MovieList
                  title="Harry Potter"
                  loading={loading}
                  movies={gallery.slice(0, 6)}
                  selectedMovieId={selectedMovieId}
                  changeSelectedMovieId={movieId => setSelectedMovieId(movieId)}
                />
              </>
            )}
          </Col>
          <Col md={4}>
            {selectedMovieId ? (
              <CommentArea movieId={selectedMovieId} />
            ) : (
              <Alert variant="info">Seleziona un film per dargli un voto</Alert>
            )}
          </Col>
        </Row>
        <MyFooter />
      </Container>
    </div>
  );
};

export default TVShows;
