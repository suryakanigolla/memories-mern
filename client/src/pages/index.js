import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";

import googleIcon from "../assets/images/google-icon.svg";
import { login } from "../actions/authActions";

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
  const dispatch = useDispatch();

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
      dispatch(login(formData, history))
    }
  };

  const handleGoogleSuccess = async (res) => {
    const userData = res?.profileObj;
    const token = res?.tokenId;

    if (userData && token) {
      dispatch({ type: "AUTH", payload: { userData, token } });
      history.push("/home");
    }
  };

  const handleGoogleFailure = (error) => {
    console.log(error);
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
          className="mb-4 d-flex align-items-center justify-content-between"
          controlId="formRememberMe"
        >
          {/* <div className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              value={formData.rememberMe}
              className="me-2"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  rememberMe: e.target.checked,
                }))
              }
            />
            <Form.Label className="mb-0 text-muted">Remember Me?</Form.Label>
          </div> */}
          <span
            className="text-bold bg-dark text-light p-1 px-2 cursor-pointer"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign Up
          </span>
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          className="w-100 mb-2"
          onClick={() => handleSubmit()}
        >
          Login
        </Button>
        <GoogleLogin
          clientId="863171998753-cvajles56ogr9jqp93jrg0umk5rsk7oh.apps.googleusercontent.com"
          onSuccess={(res) => handleGoogleSuccess(res)}
          onFailure={(error) => handleGoogleFailure(error)}
          cookiePolicy="single_host_origin"
          render={(renderProps) => (
            <Button
              variant="secondary"
              type="button"
              className="w-100 d-flex align-items-center justify-content-center"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img
                width="18px"
                src={googleIcon}
                alt="google-icon"
                className="mb-0 me-2"
              ></img>
              Login
            </Button>
          )}
        ></GoogleLogin>
      </Form>
    </div>
  );
};

export default IndexPage;
