import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked((prev) => !prev); //true/false
  };

  return (
    <div
      style={{
        fontSize: '16px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: liked ? 'black' : 'black',
        userSelect: 'none',
      }}
      onClick={handleClick}
    >
      <FaThumbsUp />
      <span>{liked ? 'Thank you!' : 'Click like if this post is useful to you !'}</span>
    </div>
  );
};

export default LikeButton;
