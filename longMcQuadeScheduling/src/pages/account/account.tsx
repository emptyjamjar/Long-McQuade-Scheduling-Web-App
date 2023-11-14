import { useEffect, useState } from "react";
import "./account.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";

/* Account page for users to check their contact information, username and password, 
and notification preferences. Uses react boostrap and has separate css file.*/
const account = () => {
<<<<<<< HEAD
  // TODO: connect to backend, get user id

  // Hook for user access once backend is connected
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    // Hardcoded user ID until we connect to backend
    const userID = 1;
    axios
      .get(`http://localhost:1919/users/${userID}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Hook to toggle password appearance
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="account" className="private-route-body">
      {/* User information section */}
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

      {/* Username and password section */}
      <h2 id="sectionHeading">Username and Password</h2>
      <div className="section" id="usernamePasswordInfo">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label className="form-label">Username</Form.Label>
            <Form.Text className="text-muted"> - Required</Form.Text>
            <Form.Control
              type="username"
              placeholder="Username"
              defaultValue="rhapsodyruth@email.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control
              disabled
              type={showPassword ? "text" : "password"}
              defaultValue="password"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Show password"
              onChange={handleTogglePassword}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNewPassword">
            <Form.Label className="form-label">New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label className="form-label">Confirm New Password</Form.Label>
            <Form.Control type="password" placeholder="New Password" />
          </Form.Group>
          <Button variant="dark" type="submit" id="username-submit-btn">
            Save my changes
          </Button>
        </Form>
      </div>

      {/* Notification preferences section */}
      <h2 id="sectionHeading">Notification and Reminders</h2>
      <div className="section" id="notificationsSection">
        <Form>
          <Form.Group className="mb-3" id="notification-form-group">
            <Form.Check
              type="checkbox"
              id="lesson-change-check"
              className="custom-check"
              label="I would like to receive email notifications for any lesson schedule changes"
            />
            <Form.Check
              type="checkbox"
              id="day-reminder-check"
              className="custom-check"
              label="I would like to receive email reminders 24 hours before my lesson"
            />
            <Form.Check
              type="checkbox"
              id="hours-reminder-check"
              className="custom-check"
              label="I would like to receive email reminders 2 hours before my lesson"
            />
            <Button variant="dark" type="submit" id="notification-submit-btn">
              Save my preferences
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
=======
  return <div></div>;
>>>>>>> ff698e03 (Was trying out responsive sidebar)
};

export default account;
