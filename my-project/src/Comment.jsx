import React, { useState } from "react";

function Comment() {
  const [comment, setComment] = useState("");
  const maxLength = 200;

  const handleChange = (event) => {
    console.log('comment ')
    setComment(event.target.value);
  };

  return (
    <div>
      <textarea value={comment} onChange={handleChange} maxLength={maxLength} />
      <p>{maxLength - comment.length} characters left</p>
    </div>
  );
}

export default Comment;
