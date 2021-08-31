import React from "react";
import { Pagination as PaginationGroup } from "react-bootstrap";

import Post from "./Post";
import SkeletonPost from "./SkeletonPost";

import "./Pagination.scss";

const Pagination = ({ data, pageLimit, dataLimit }) => {
  const [pages, setPages] = React.useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
    if (currentPage > pages && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [data, dataLimit, currentPage, pages]);

  const goNext = () => {
    setCurrentPage((page) => page + 1);
  };

  const goBack = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const sliceData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const paginationGroup = () => {
    if (pages > pageLimit) {
      const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
      return new Array(pageLimit).fill().map((_, index) => start + index + 1);
    }
    return new Array(pages).fill().map((_, idx) => idx + 1);
  };

  return (
    <React.Fragment>
      <div className="pagination-group mb-1">
        <PaginationGroup className="ms-0 mb-0">
          <PaginationGroup.Prev
            disabled={currentPage === 1}
            onClick={() => goBack()}
          />
          {paginationGroup().map((number, index) => (
            <PaginationGroup.Item
              key={index}
              active={number === currentPage}
              onClick={() => changePage(number)}
            >
              {number}
            </PaginationGroup.Item>
          ))}
          <PaginationGroup.Next
            disabled={currentPage === pages}
            onClick={() => goNext()}
          />
        </PaginationGroup>
      </div>
      <div className="pagination-posts">
        {data.length ? (
          sliceData().map((post, index) => (
            <Post
              key={index}
              title={post.title}
              desc={post.message}
              likeCount={post.likeCount}
              image={post.selectedFile}
              creator={post.creator}
              id={post._id}
            />
          ))
        ) : (
          <React.Fragment>
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
            <SkeletonPost />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
