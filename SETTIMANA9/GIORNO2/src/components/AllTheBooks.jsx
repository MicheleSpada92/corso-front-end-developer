// AllTheBooks.jsx

import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';
import SingleBook from './SingleBook';

const AllTheBooks = ({ onSelectBook }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    onSelectBook(book); // Passa l'intero libro alla funzione onSelectBook
  };

  return (
    <Row>
      {fantasy.map((book) => (
        <Col xs={12} md={4} key={book.asin} onClick={() => handleSelectBook(book)}>
          <SingleBook book={book} isSelected={book === selectedBook} />
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
