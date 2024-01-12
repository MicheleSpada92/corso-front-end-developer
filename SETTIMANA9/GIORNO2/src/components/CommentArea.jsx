// CommentArea.jsx
import React, { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

const CommentArea = ({ selected, elementId, book }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selected) {
      fetchComments();
    }
  }, [selected, elementId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${elementId}/comments`,
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlmZjMwYzI5ZTM2YjAwMTg2N2VjY2EiLCJpYXQiOjE3MDQ5ODEyNjAsImV4cCI6MTcwNjE5MDg2MH0.xjWm3JkW2AzYIzMeJFAxdtwNSKIOPmrQeTF-TdPj19A', // Sostituisci con il tuo token
          },
        }
      );

      if (response.ok) {
        const commentsData = await response.json();
        setComments(commentsData);
      } else {
        console.error('Errore nel recupero dei commenti');
        setError('Impossibile recuperare i commenti');
      }
    } catch (error) {
      console.error('Errore nel fetch dei commenti:', error);
      setError('Errore di rete durante il recupero dei commenti');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlmZjMwYzI5ZTM2YjAwMTg2N2VjY2EiLCJpYXQiOjE3MDQ5ODEyNjAsImV4cCI6MTcwNjE5MDg2MH0.xjWm3JkW2AzYIzMeJFAxdtwNSKIOPmrQeTF-TdPj19A', // Sostituisci con il tuo token
          },
        }
      );

      if (response.ok) {
        // Aggiorna lo stato o esegui altre azioni necessarie dopo la cancellazione del commento
        setComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
      } else {
        console.error('Errore nella cancellazione del commento:', response.statusText);
        setError('Impossibile cancellare il commento');
      }
    } catch (error) {
      console.error('Errore nella richiesta DELETE:', error);
      setError('Errore di rete durante la cancellazione del commento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <CommentsList comments={comments} onDeleteComment={handleDeleteComment} />
          {/* Passa l'elementId e book a AddComment */}
          <AddComment elementId={elementId} book={book} />
        </>
      )}
    </div>
  );
};

export default CommentArea;
