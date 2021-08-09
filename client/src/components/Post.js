import React from "react";

import heartIcon from "../assets/images/heart.svg";
import heartFillIcon from "../assets/images/heart-fill.svg";

import "./Post.scss";

const Post = ({ title, desc, likeCount, image, creator, containerClass }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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
      <div className="post__footer">
        <div className="post__footer__like d-flex align-items-center">
          <img src={heartIcon} alt="heart" />
          <span className="ms-2">{likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
