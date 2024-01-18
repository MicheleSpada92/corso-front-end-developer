import { Badge, ListGroup } from "react-bootstrap";

const CommentsList = ({ comments, loading, error }) => {
  return (
    <ListGroup>
      {!loading && !error && comments.length > 0 ? (
        comments.map(comment => (
          <ListGroup.Item key={comment._id}>
            <Badge pill variant="info" className="mr-3">
              {comment.rate}
            </Badge>
            {comment.comment}
          </ListGroup.Item>
        ))
      ) : (
        <ListGroup.Item className="bg-dark text-white">non ci sono ancora commenti, aggiungine uno</ListGroup.Item>
      )}
    </ListGroup>
  );
};

export default CommentsList;
