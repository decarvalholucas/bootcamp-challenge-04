import React from 'react';

import "./style.css";

function Comment({ data }) {
  const { author, content } = data;
  return (
    <div className="comment">
      <img src={author.avatar} alt={author.name} className="avatar" />
      <div className="content">
        <p><strong>{author.name}</strong> {content}</p>
      </div>
    </div>
  );
}

export default Comment;