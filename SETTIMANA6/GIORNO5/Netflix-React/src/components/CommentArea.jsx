import { Component, useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import { Form, InputGroup, FormControl, Button, Alert } from "react-bootstrap";

const CommentArea = props => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "3",
    elementId: ""
  });

  const fetchComments = async () => {
    setLoading(true);
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/" + props.movieId + "/comments/", {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE4ZjYwNjJjM2Y0ODAwMThhZjgyYTciLCJpYXQiOjE3MDU1NzE4NDYsImV4cCI6MTcwNjc4MTQ0Nn0.-UeTB4IJmJF4jsD8MBFZyw6BWSO5rf4Fak3jp1vNbYs"
        }
      });
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setError(false);
        setLoading(false);
      } else {
        console.log("error");
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.movieId]);

  const submitComment = async e => {
    e.preventDefault();
    const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(COMMENTS_URL, {
        method: "POST",
        body: JSON.stringify({ ...newComment, elementId: props.movieId }),
        headers: {
          Authorization: "Bearer YOUR-KEY-HERE",
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        alert("Comment added");
        fetchComments(); // aggiorna la lista dei commenti con il nuovo aggiunto
        // nel frattempo resettiamo i campi del form per aspettare un nuovo commento
        setNewComment({
          comment: "",
          rate: 3,
          elementId: props.movieId
        });
      } else {
        alert("An error has occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRadioChange = rating => {
    setNewComment({ ...newComment, rate: rating });
  };

  const handleCommentText = e => {
    setNewComment({ ...newComment, comment: e.currentTarget.value });
  };
  return (
    <div className="my-3">
      {error && (
        <Alert variant="danger" className="text-center">
          Error fetching comments
        </Alert>
      )}
      <CommentsList comments={comments} loading={loading} error={error} />
      <div className="text-center text-light">
        <h5 className="my-3">Add a comment</h5>
        <Form onSubmit={submitComment}>
          <div className="my-3 text-center">
            {["1", "2", "3", "4", "5"].map(num => (
              <Form.Check
                inline
                label={num}
                value={num}
                key={"n-" + num}
                type="radio"
                name="rating"
                defaultChecked={newComment.rate === num}
                onClick={() => handleRadioChange(num)}
              />
            ))}
          </div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Write your comment"
              aria-label="comment"
              aria-describedby="basic-addon1"
              onChange={handleCommentText}
              value={newComment.comment}
              required
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CommentArea;
