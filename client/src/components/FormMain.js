import React from "react";
import { Form, Button, Spinner, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { toBase64 } from "../utils";
import { createPost } from "../actions/postsActions";
import uploadIcon from "../assets/images/upload.png";

import "../assets/scss/styles.scss";

const initialFormState = {
  creator: "Surya K",
  message: "",
  title: "",
  selectedFile: "",
};

const FormMain = () => {
  const [formData, setFormData] = React.useState(initialFormState);
  const [currentForm, setCurrentForm] = React.useState(0);
  const isCreatingPost = useSelector((state) => state.posts.isCreatingPost);
  const fileRef = React.useRef(null);
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
    fileRef.current.value = "";
  };

  return (
    <Form>
      {currentForm === 0 && (
        <div>
          <h3 className="mb-3">Create a post!</h3>
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

          <Button
            variant="primary"
            type="button"
            className="w-100"
            onClick={() => setCurrentForm(1)}
          >
            Next
          </Button>
        </div>
      )}
      {currentForm === 1 && (
        <div className="d-flex flex-column justify-content-end">
          <h3 className="mb-4">Add some images!</h3>
          <Form.Group controlId="formFile" className="mb-5">
            {!formData.selectedFile && (
              <div
                className="image_holder"
                onClick={() => fileRef.current.click()}
              >
                <div className="me-2">
                  <img src={uploadIcon} alt="upload" />
                </div>
                <p className="mb-0">Upload image</p>
              </div>
            )}
            {formData.selectedFile && (
              <div
                className="image_holder image_holder_active"
                onClick={() => fileRef.current.click()}
              >
                <img src={formData.selectedFile} alt="upload" />
              </div>
            )}
            <Form.Control
              type="file"
              ref={fileRef}
              accept="image/*"
              className="d-none"
              onChange={(e) => handleFileUpload(e.target.files[0])}
            />
          </Form.Group>
          <ButtonGroup>
            <Button
              variant="secondary"
              type="button"
              onClick={() => setCurrentForm(0)}
              className="me-2"
            >
              Back
            </Button>

            <Button
              variant="primary"
              type="button"
              onClick={() => handleSubmit()}
              disabled={isCreatingPost}
            >
              {isCreatingPost ? (
                <React.Fragment>
                  <Spinner animation="border" variant="light" size="sm" />{" "}
                  Posting...
                </React.Fragment>
              ) : (
                "Submit"
              )}
            </Button>
          </ButtonGroup>
        </div>
      )}
    </Form>
  );
};

export default FormMain;
