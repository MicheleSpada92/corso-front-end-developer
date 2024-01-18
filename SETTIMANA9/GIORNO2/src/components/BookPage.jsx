// BookPage.jsx

import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllTheBooks from './AllTheBooks';
import CommentArea from './CommentArea';

const BookPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Container>
      <Row>
        <Col xs={8}>
          <AllTheBooks onSelectBook={setSelectedBook} />
        </Col>
        <Col xs={4}>
          <CommentArea selectedBook={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookPage;
