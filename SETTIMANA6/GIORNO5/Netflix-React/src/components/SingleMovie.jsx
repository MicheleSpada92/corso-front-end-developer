import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

const SingleMovie = ({ data, selectedMovieId, changeSelectedMovieId }) => {
  const navigate = useNavigate();

  return (
    <Col className="mb-2">
      <img
        className="img-fluid"
        src={data.Poster}
        alt="movie"
        onClick={() => {
          changeSelectedMovieId(data.imdbID);
        }}
        style={{ border: selectedMovieId === data.imdbID ? "2px solid red" : "" }}
      />
      <Button
        className="d-block w-100 bg-dark border-dark rounded-0"
        onClick={() => navigate("/details/" + data.imdbID)}
      >
        Movie Details
      </Button>
    </Col>
  );
};

export default SingleMovie;
