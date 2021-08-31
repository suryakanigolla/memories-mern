import React from "react";

import Skeleton from "react-loading-skeleton";

import "./SkeletonPost.scss"

const SkeletonPost = () => {
  return (
    <div className="skeleton-post">
      <div
        className="skeleton-post__header"
      ></div>
      <div className="skeleton-post__body p-3">
        <h4 className="mb-1">
          <Skeleton />
        </h4>
        <h5 className="mb-3">
          <Skeleton />
        </h5>
        <p className="mb-0 pe-2">
          <Skeleton count={5} />
        </p>
      </div>
      <div className="skeleton-post__footer px-3 pb-1">
        <div className="d-flex align-items-center justify-content-end">
          <span  style={{width: "30px"}}>
            <Skeleton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPost;
