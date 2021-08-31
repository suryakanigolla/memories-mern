import React from "react";
import { Form, Button, Spinner, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createPost } from "../actions/postsActions";

import ImageDropZone from "./ImageDropZone";

const initialFormState = {
  creator: "Surya K",
  message: "",
  title: "",
  selectedFile: "",
  tags: [],
};

const initialFormInValid = {
  title: false,
  message: false,
};

const FormMain = () => {
  const [formData, setFormData] = React.useState(initialFormState);
  const [formInValidity, setFormInValidity] =
    React.useState(initialFormInValid);
  const [currentForm, setCurrentForm] = React.useState(0);
  const isCreatingPost = useSelector((state) => state.posts.isCreatingPost);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createPost(formData));
    clear();
  };

  const handleNextForm = () => {
    if (!formData.title.length) {
      setFormInValidity((prev) => ({ ...prev, title: true }));
    } else {
      setFormInValidity((prev) => ({ ...prev, title: false }));
    }

    if (!formData.message.length) {
      setFormInValidity((prev) => ({ ...prev, message: true }));
    } else {
      setFormInValidity((prev) => ({ ...prev, message: false }));
    }

    if (!formInValidity.title && !formInValidity.message) {
      setCurrentForm(1);
    }
  };

  const clear = () => {
    setFormData(initialFormState);
    setFormInValidity(initialFormInValid);
    setTimeout(() => {
      setCurrentForm(0);
    }, 1000);
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
              isInvalid={formInValidity.title}
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
              isInvalid={formInValidity.message}
            />
            <Form.Text className="text-muted">
              Describe your awesome experience.
            </Form.Text>
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            className="w-100"
            onClick={() => handleNextForm()}
          >
            Next
          </Button>
        </div>
      )}
      {currentForm === 1 && (
        <div className="d-flex flex-column justify-content-end">
          <h3 className="mb-4">Add an image! (and some tags?)</h3>
          <ImageDropZone setFormData={setFormData} />
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
