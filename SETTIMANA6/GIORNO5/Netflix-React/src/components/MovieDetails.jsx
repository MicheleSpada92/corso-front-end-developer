import { useEffect } from "react";
import { useState } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router";
import OMDB_URL from "../helpers/omdbURL";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(OMDB_URL + "&i=" + params.movieID);
        if (resp.ok) {
          let data = await resp.json();
          console.log(data);
          setDetails(data);
        } else {
          console.log("error fetching details");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/movies/" + params.movieID + "/comments/",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE4ZjYwNjJjM2Y0ODAwMThhZjgyYTciLCJpYXQiOjE3MDU1NzE4NDYsImV4cCI6MTcwNjc4MTQ0Nn0.-UeTB4IJmJF4jsD8MBFZyw6BWSO5rf4Fak3jp1vNbYs"
            }
          }
        );
        if (response.ok) {
          let data = await response.json();
          setComments(data);
        } else {
          console.log("error fetching comments");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
    fetchComments();
  }, [params.movieID]);

  return (
    <div className="text-center text-white">
      {details && (
        <Container>
          <h2>{details.Title}</h2>
          <img src={details.Poster} alt="movie poster" />
          <ListGroup style={{ listStyleType: "none" }}>
            {!isLoading && comments.length === 0 ? (
              <ListGroupItem className="my-3 bg-dark text-white">Non ci sono ancora commenti</ListGroupItem>
            ) : (
              comments.map(c => (
                <ListGroupItem className="my-3 bg-dark text-white" key={c._id}>
                  {c.author}: {c.comment}
                </ListGroupItem>
              ))
            )}
          </ListGroup>
        </Container>
      )}
    </div>
  );
};

export default MovieDetails;
