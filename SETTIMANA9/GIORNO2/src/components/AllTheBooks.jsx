import { Card, Col, Row } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import CommentArea from './CommentArea';

const AllTheBooks = () => {
  return (
    <Row>
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                {/* Aggiungi la componente CommentArea passando l'elementId del libro */}
                <CommentArea elementId={book.asin} />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
