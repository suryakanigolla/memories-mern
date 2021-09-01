import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { toBase64 } from "../utils";

import Tag from "./Tag";

import "./ImageDropZone.scss";

const ImageDropZone = ({setFormData, currentPost}) => {
  const [image, setImage] = React.useState(currentPost ? currentPost.selectedFile : null);
  const [points, setPoints] = React.useState(currentPost ? currentPost.tags : []);
  const fileUploadRef = React.useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(async (file) => {
      const tempBase64 = await toBase64(file);
      setImage(tempBase64);
      setFormData((prev) => ({...prev, selectedFile: tempBase64}))
    });
  }, [setFormData]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleAddTag = (e) => {
    if (e.target.id === "image") {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left + 20; //Adjustment for padding
      var y = e.clientY - rect.top + 5; //Adjustment for padding

      if (points.length < 9) {
        let pointsTemp = [...points, {x,y}]
        setPoints(pointsTemp);
        setFormData((prev) => ({...prev, tags: pointsTemp}))
      }
    }
  };

  return (
    <React.Fragment>
      <div {...getRootProps()}>
        <input {...getInputProps()} ref={fileUploadRef} accept="image/*" />
      </div>
      <div className="image_form">
        <div className={`image_container ${image && "uploaded"}`}>
          {image && (
            <React.Fragment>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                className="image"
                onClick={(e) => handleAddTag(e)}
                id="image"
              >
                {points.map((point, index) => (
                  <Tag key={index} x={point.x} y={point.y} number={index + 1} />
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
        <p className="text-muted mb-2">
          <span className="h5">Note: </span> Click anywhere on the image to add
          a tag.
        </p>
        <div
          className="custom_button"
          onClick={() => fileUploadRef.current.click()}
        >
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p className="mb-0">
              Drop your image here, or{" "}
              <span className="browse-text">browse</span>
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageDropZone;
