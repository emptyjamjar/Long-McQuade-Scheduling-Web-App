import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/UserContext";
import "./login.css";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setUser } = useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(
      "Username: ",
      credentials.username,
      ", Password: ",
      credentials.password
    );

    const apiEndpoint = "http://localhost:1919/login";

    try {
      const response = await axios.post(
        apiEndpoint,
        {
          username: credentials.username,
          password: credentials.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response.status === 200 &&
        response.data.message === "Login successful"
      ) {
        setUser(response.data.currentUser);

        navigate("/");
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      setError("Error during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div id="login">
      <Header message="Where the Music Begins" name="" />
      <Form onSubmit={handleLogin} id="login-form">
        <Form.Group className="login-group-form" controlId="formLoginUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="login-group-form" controlId="formLoginPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </Form.Group>

        {error && (
          <div className="error-message" style={{ color: "rgb(255, 39, 39)" }}>
            {error}
          </div>
        )}
        <Button id="loginButton" variant="dark" type="submit">
          LOGIN
        </Button>
      </Form>
    </div>
  );
}

export default Login;
