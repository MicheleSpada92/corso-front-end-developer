// CommentsList.jsx

import React from 'react';
import SingleComment from './SingleComment';

const CommentsList = ({ comments, onDeleteComment }) => {
  return (
    <div>
      <h3>Recensioni</h3>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} onDelete={onDeleteComment} />
      ))}
    </div>
  );
};

export default CommentsList;
