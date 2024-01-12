// SingleComment.jsx

import React from 'react';

const SingleComment = ({ comment, onDelete }) => {
  return (
    <div>
      <p>{comment.comment}</p>
      <p>Rating: {comment.rate}</p>
      <button onClick={() => onDelete(comment._id)}>Cancella</button>
    </div>
  );
};

export default SingleComment;
