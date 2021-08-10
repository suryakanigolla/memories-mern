import React from "react";

import "./Post.scss";

const Post = ({ title, desc, likeCount, image, creator, containerClass }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div id="post" className={`post ${containerClass} ${isOpen && "open"}`}>
      <div
        className="post__header"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
        }}
      >
        <div className="post__header__edit">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          id="post_button"
          className="post_open_button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="left"></span>
          <span className="right"></span>
        </div>
      </div>
      <div className="post__body p-3">
        <h4>{title}</h4>
        <p className="mb-0">{desc}</p>
      </div>
      <div className="post__footer">
        <div className="post__footer__like d-flex align-items-center">
          <button
            className={`post__footer__like__button ${isLiked && "liked"}`}
            onClick={() => setIsLiked((prev) => !prev)}
          >
            <span className="like-icon">
              <div className="heart-animation-1"></div>
              <div className="heart-animation-2"></div>
            </span>
          </button>
          <span className="post__footer__like__count">{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
