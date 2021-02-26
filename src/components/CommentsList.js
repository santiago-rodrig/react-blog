import React from "react";

function CommentsList({ comments }) {
  return (
    <>
      <h3>Comments:</h3>
      {comments.map((c, i) => (
        <div className="comment" key={i}>
          <h4>{c.username}</h4>
          <p>{c.text}</p>
        </div>
      ))}
    </>
  );
}

export default CommentsList;
