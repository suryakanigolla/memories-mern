import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { toBase64 } from "../utils";
import { createPost } from "../actions/postsActions";

import "../assets/scss/styles.scss";

const initialFormState = {
  creator: "Surya K",
  message: "",
  title: "",
  selectedFile: "",
};

const FormMain = () => {
  const [formData, setFormData] = React.useState(initialFormState);
  const isCreatingPost = useSelector((state) => state.posts.isCreatingPost);
  const fileRef = React.useRef(null)
  const dispatch = useDispatch();

  const handleFileUpload = async (file) => {
    const base46Image = await toBase64(file);
    setFormData((prev) => ({ ...prev, selectedFile: base46Image }));
  };

  const handleSubmit = () => {
    dispatch(createPost(formData));
    clear();
  };

  const clear = () => {
    setFormData(initialFormState);
    fileRef.current.value = ""
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <Form.Text className="text-muted">
          Eyecatching title for your post!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          style={{ resize: "none" }}
          as="textarea"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
        <Form.Text className="text-muted">
          Describe your awesome experience.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control
          type="file"
          ref={fileRef}
          onChange={(e) => handleFileUpload(e.target.files[0])}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        onClick={() => handleSubmit()}
        disabled={isCreatingPost}
      >
        {isCreatingPost ? (
          <React.Fragment>
            <Spinner animation="border" variant="light" size="sm" /> Posting...
          </React.Fragment>
        ) : (
          "Submit"
        )}
      </Button>
    </Form>
  );
};

export default FormMain;
