import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const initialState = {
  email: "",
  password: "",
  rememberMe: false,
};

const initialFormInvalid = {
  email: false,
  password: false,
};

const IndexPage = () => {
  const [formData, setFormData] = React.useState(initialState);
  const [formInValidity, setFormInValidity] =
    React.useState(initialFormInvalid);

  const history = useHistory();

  const handleSubmit = () => {
    if (!formData.email.length) {
      setFormInValidity((prev) => ({ ...prev, email: true }));
    } else {
      setFormInValidity((prev) => ({ ...prev, email: false }));
    }
    if (!formData.password.length) {
      setFormInValidity((prev) => ({ ...prev, password: true }));
    } else {
      setFormInValidity((prev) => ({ ...prev, password: false }));
    }
    if (!formInValidity.email && !formInValidity.password) {
      console.log("All good");
      history.push("/home")
    }
  };

  return (
    <div className="index-page">
      <Form className="index-page-form">
        <h3 className="index-page-form__heading">Login</h3>
        <Form.Group
          className="mb-3 index-page-form__group"
          controlId="formEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            isInvalid={formInValidity.email}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 index-page-form__group"
          controlId="formPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            isInvalid={formInValidity.password}
          />
        </Form.Group>
        <Form.Group
          className="mb-5 d-flex align-items-center"
          controlId="formRememberMe"
        >
          <Form.Check
            type="checkbox"
            value={formData.rememberMe}
            className="me-2"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, rememberMe: e.target.checked }))
            }
          />
          <Form.Label className="mb-0 text-muted">Remember Me?</Form.Label>
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          className="w-100"
          onClick={() => handleSubmit()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default IndexPage;
