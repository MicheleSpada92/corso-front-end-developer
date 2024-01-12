import React, { useState } from 'react';

const AddComment = (props) => {
  const [newComment, setNewComment] = useState('');
  const [newRate, setNewRate] = useState('');

  const handleAddComment = async () => {
    console.log('props:', props);
    console.log('props.book:', props.book);
    console.log('props.book.asin:', props.book && props.book.asin);
    
    if (!newComment || !newRate || !props?.book?.asin) {
        console.error('Il testo del commento e il voto sono obbligatori');
        return;
      }

    const commentData = {
      comment: newComment,
      rate: newRate,
      elementId: props.book.asin,
    };

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlmZjMwYzI5ZTM2YjAwMTg2N2VjY2EiLCJpYXQiOjE3MDQ5ODEyNjAsImV4cCI6MTcwNjE5MDg2MH0.xjWm3JkW2AzYIzMeJFAxdtwNSKIOPmrQeTF-TdPj19A', // Sostituisci con il tuo token
          },
          body: JSON.stringify(commentData),
        }
      );

      if (response.ok) {
        // Aggiorna lo stato o esegui altre azioni necessarie dopo l'aggiunta del commento
        setNewComment('');
        setNewRate('');
      } else {
        console.error('Errore nell\'aggiunta del commento:', response.statusText);
      }
    } catch (error) {
      console.error('Errore nella richiesta POST:', error);
    }
  };

  return (
    <div>
      <h2>Aggiungi una recensione:</h2>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Inserisci il tuo commento"
      />
      <input
        type="number"
        value={newRate}
        onChange={(e) => setNewRate(e.target.value)}
        placeholder="Valutazione (da 1 a 5)"
      />
      <button onClick={handleAddComment}>Aggiungi recensione</button>
    </div>
  );
};

export default AddComment;
