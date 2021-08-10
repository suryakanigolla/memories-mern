import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "./actions/postsActions";
import FormMain from "./components/FormMain";
import Post from "./components/Post";

import sunIcon from "./assets/images/sun.png";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-75">
        {posts.map((post, index) => (
          <Post
            title={post.title}
            creator={post.creator}
            desc={post.message}
            image={post.selectedFile}
            likeCount={post.likeCount}
            key={index}
            containerClass="col-6 px-0 m-2"
          />
        ))}
      </div>
      {/* <Card className="p-4 bg-light">
        <h3 className="mb-3">Create a post!</h3>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Itza suuunnn! :O</Tooltip>}
        >
          <div className="sun-icon">
            <img src={sunIcon} alt="sun" />
          </div>
        </OverlayTrigger>
        <FormMain />
      </Card> */}
    </div>
  );
};

export default App;
