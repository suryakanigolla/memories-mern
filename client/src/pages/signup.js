import React from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router";

const initialState = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const initialFormInvalid = {
  email: false,
  password: false,
  passwordConfirm: false,
};

const SignUpPage = () => {
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
    if (!formData.passwordConfirm.length) {
      setFormInValidity((prev) => ({ ...prev, passwordConfirm: true }));
    } else {
      setFormInValidity((prev) => ({ ...prev, passwordConfirm: false }));
    }
    if (
      !formInValidity.email &&
      !formInValidity.password &&
      !formInValidity.passwordConfirm
    ) {
      console.log("All good");
      history.push("/login");
    }
  };

  return (
    <div className="sign-up-page">
      <Form className="sign-up-page-form">
        <h3 className="sign-up-page-form__heading">Sign Up</h3>
        <Form.Group
          className="mb-3 sign-up-page-form__group"
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
          className="mb-3 sign-up-page-form__group"
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
          className="mb-3 sign-up-page-form__group"
          controlId="formPasswordConfirm"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={formData.passwordConfirm}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                passwordConfirm: e.target.value,
              }))
            }
            isInvalid={formInValidity.passwordConfirm}
          />
        </Form.Group>
        <ButtonGroup>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              history.push("/");
            }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
};

export default SignUpPage;
