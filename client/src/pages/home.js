import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postsActions";

import Pagination from "../components/Pagination";
import FormMain from "../components/FormMain";

const HomePage = () => {
  const [currentId, setCurrentId] = React.useState(null)

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const currentPost = useSelector((state) => state.posts.posts.find((post) => post._id === currentId))


  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div className="home-page row align-items-center justify-content-between">
      <div className="col-auto">
        <Pagination data={posts} pageLimit={3} dataLimit={4} setCurrentId={setCurrentId} />
      </div>
      <div className="col-4">
        <FormMain currentPost={currentPost} setCurrentId={setCurrentId}/>
      </div>
    </div>
  );
};

export default HomePage;
