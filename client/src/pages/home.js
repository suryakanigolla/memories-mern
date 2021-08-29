import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";

import Post from "../components/Post";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <div className="home-page row">
      <div className="home-page__posts col-7">
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            desc={post.message}
            likeCount={post.likeCount}
            image={post.selectedFile}
            creator={post.creator}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
