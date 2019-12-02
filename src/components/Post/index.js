import React from 'react';

import './style.css';

import Comment from '../Comment';

function Post({ data }) {
  const { author, date, content, comments } = data;
  return (
    <div className="post">
      <div className="post-user">
        <div className="post-info">
          <img src={author.avatar} alt={data.author.name} className="avatar" />
          <div className="info">
            <span className="author">{author.name}</span>
            <div className="date">{date}</div>
          </div>
        </div>
        <span className="publication">{content}</span>
      </div>
      <div className="post-comment">
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
    </div>
  );
}

export default Post;