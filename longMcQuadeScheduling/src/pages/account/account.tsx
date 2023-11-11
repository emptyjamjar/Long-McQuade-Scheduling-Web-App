import React, { useEffect, useState } from "react";
import "./account.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

const account = () => {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const userID = 2;
    axios
      .get(`http://localhost:1919/users/students/${userID}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="account" className="private-route-body">
      <h2 id="sectionHeading">Student</h2>
      <div className="section" id="studentInfo">
        <div id="col">
          <div>
            <h3 id="infoHeading">First Name</h3>
            <p>Rhapsody</p>
            <h3 id="infoHeading">Mobile</h3>
            <p>(123) 123 1234</p>
            <h3 id="infoHeading">Primary Email</h3>
            <p>rhapsodyruth@email.com</p>
            <h3 id="infoHeading">Current Teachers</h3>
            <p>Jana Janovsky</p>
          </div>
        </div>
        <div id="col">
          <div>
            <h3 id="infoHeading">Last Name</h3>
            <p>Ruth</p>
            <h3 id="infoHeading">Home</h3>
            <p>(456) 456 4567</p>
            <h3 id="infoHeading">Alternate Email</h3>
            <p>rollingruth@mail.work.ca</p>
            <h3 id="infoHeading">Instruments</h3>
            <p>Violin</p>
          </div>
        </div>
        <div id="col">
          <div>
            <h3 id="infoHeading">Date of Birth</h3>
            <p>July 20, 1969</p>
            <h3 id="infoHeading">Work</h3>
            <p>N/A</p>
            <h3 id="infoHeading">Address</h3>
            <p>2120 South Michigan Avenue</p>
            <h3 id="infoHeading">Skill Level</h3>
            <p>Beginner</p>
          </div>
        </div>
      </div>

      <h2 id="sectionHeading">Username and Password</h2>
      <div className="section" id="usernamePasswordInfo">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="form-label">Username</Form.Label>
            <Form.Text className="text-muted"> - Required</Form.Text>
            <Form.Control
              className="form-input"
              type="username"
              placeholder="Username"
              defaultValue="rhapsodyruth@email.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNewPassword">
            <Form.Label className="form-label">New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              className="form-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              disabled
              type={showPassword ? "text" : "password"}
              defaultValue="password"
              className="form-input"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Show password"
              onChange={handleTogglePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNewPassword">
            <Form.Label className="form-label">Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="New Password"
              className="form-input"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default account;
