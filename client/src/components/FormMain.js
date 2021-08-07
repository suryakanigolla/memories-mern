import React from "react";
import { Form, Button } from "react-bootstrap";

import "../assets/scss/styles.scss";

const FormMain = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          Eyecatching title for your post!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          style={{resize: "none"}}
          as="textarea"
          rows={5}
        />
        <Form.Text className="text-muted">
          Describe your awesome experience.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label>Upload an image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormMain;
