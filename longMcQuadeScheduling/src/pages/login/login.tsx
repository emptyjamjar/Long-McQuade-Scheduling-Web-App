import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../../components/Header";
import "./login.css";

/* The login page for all users */
function Login() {
  return (
    <div id="login">
      <Header message="Where the Music Begins" name=""></Header>
      <Form>
        <Form.Group className="mb-3" controlId="formLoginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
