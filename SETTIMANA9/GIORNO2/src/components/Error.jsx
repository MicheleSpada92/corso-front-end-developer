// Error.jsx
import React from 'react';

const Error = ({ message }) => {
  return (
    <div style={{ color: 'red', padding: '10px', border: '1px solid red', borderRadius: '5px' }}>
      <p>Errore: {message}</p>
    </div>
  );
};

export default Error;
