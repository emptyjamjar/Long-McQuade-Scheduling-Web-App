import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

/* The login page for all users. Has separate css file and uses react bootstrap components */
function Login() {
  // Hooks for username, password, and memory
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // The asynchronous login method which attempts to connect to backend
  // TODO: not working currently, CORS errors, update if need be
  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1919/",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.log("Error during login: ", error);
    }
  };

  return (
    <div id="login">
      <Header message="Where the Music Begins" name=""></Header>
      <Form onSubmit={handleLogin} id="login-form">
        <Form.Group className="login-group-form" controlId="formLoginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="login-group-form" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="login-group-form" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            id="rememberMeCheck"
            label="Remember Me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        </Form.Group>
        <div id="forgotLinks">
          <a href="#" className="forgot-link">
            Forgot username?
          </a>
          <a href="#" className="forgot-link">
            Forgot password?
          </a>
        </div>
        <Button id="loginButton" variant="dark" type="submit">
          LOGIN
        </Button>
      </Form>
    </div>
  );
}

export default Login;
