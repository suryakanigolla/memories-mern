import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";

import Pagination from "../components/Pagination";
import FormMain from "../components/FormMain";

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="home-page row align-items-center justify-content-between">
      <div className="col-auto">
        <Pagination data={posts} pageLimit={3} dataLimit={4} />
      </div>
      <div className="col-4">
        <FormMain />
      </div>
    </div>
  );
};

export default HomePage;
