import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../actions/postsActions";

import "./Post.scss";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className="post__header__edit"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <div></div>
    <div></div>
    <div></div>
    {children}
  </div>
));

const Post = ({
  title,
  desc,
  isPostLiked,
  image,
  creator,
  containerClass,
  id,
  setCurrentId,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(isPostLiked);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
    setCurrentId(null);
  };

  const handleEdit = () => {
    setCurrentId(id);
  };

  const handleLike = () => {
    const tempIsLiked = isLiked;
    setIsLiked((prev) => !prev);
    dispatch(likePost(id, !tempIsLiked));
  };

  return (
    <div
      id="post"
      className={`post ${containerClass || ""} ${isOpen && "open"}`}
    >
      <div
        className="post__header"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
        }}
      >
        <Dropdown>
          <Dropdown.Toggle
            as={CustomToggle}
            id="dropdown-custom-components"
          ></Dropdown.Toggle>

          <Dropdown.Menu align="start">
            <Dropdown.Item eventKey="1" onClick={() => handleEdit()}>
              Edit
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => handleDelete()}>
              Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
        <h4 className="mb-1">{title}</h4>
        <h5 className="text-muted mb-3">{creator}</h5>
        <p className="mb-0 pe-2">{desc}</p>
      </div>
      <div className="post__footer">
        <div className="post__footer__like d-flex align-items-center">
          <button
            className={`post__footer__like__button ${isLiked && "liked"}`}
            onClick={() => handleLike()}
          >
            <span className="like-icon">
              <div className="heart-animation-1"></div>
              <div className="heart-animation-2"></div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
