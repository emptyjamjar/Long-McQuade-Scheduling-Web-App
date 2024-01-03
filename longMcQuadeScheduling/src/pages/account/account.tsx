import { useEffect, useState } from "react";
import "./account.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useUser } from "../../components/UserContext";

interface UserInformation {
  instrumentsPlayed: string[];
  firstName: string;
  lastName: string;
  address: string;
  pcode: string;
  email: string;
  experience: string;
}

/* Account page for users to check their contact information, username and password, 
and notification preferences. Uses react boostrap and has separate css file.*/
const account = () => {
  const { userDetails } = useUser();
  const [user, setUser] = useState<UserInformation | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const username = userDetails.userNumber;
    const password = userDetails.pwd;

    let apiEndpoint;

    if (username.startsWith("S")) {
      // Student endpoint
      apiEndpoint = `http://localhost:1919/users/students/${username}`;
    } else if (username.startsWith("A")) {
      // User endpoint
      apiEndpoint = `http://localhost:1919/users/${username}`;
    } else if (username.startsWith("T")) {
      // Teacher endpoint
      apiEndpoint = `http://localhost:1919/users/teachers/${username}`;
    } else {
      // Default endpoint or handle other cases
      apiEndpoint = `http://localhost:1919/defaultEndpoint/${username}`;
    }

    axios
      .get(apiEndpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      })
      .then((response) => {
        // Handle the response data accordingly
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user information", error);
      });
  }, [userDetails]);

  console.log("user:", user);
  console.log("userDetails:", userDetails);

  return (
    <>
      {user ? (
        <div id="account" className="private-route-body">
          {/* User information section */}
          <h2 id="sectionHeading">Student</h2>
          <div className="section" id="studentInfo">
            <div id="col">
              <div>
                <h3 id="infoHeading">First Name</h3>
                <p>{user.firstName}</p>

                <h3 id="infoHeading">Email</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <div id="col">
              <div>
                <h3 id="infoHeading">Last Name</h3>
                <p>{user.lastName}</p>
                <h3 id="infoHeading">Instruments</h3>
                <p>{user.instrumentsPlayed}</p>
              </div>
            </div>
            <div id="col">
              <div>
                <h3 id="infoHeading">Address</h3>
                <p>{user.address}</p>
                <h3 id="infoHeading">Skill Level</h3>
                <p>{user.experience}</p>
              </div>
            </div>
          </div>

          {/* Username and password section */}
          <h2 id="sectionHeading">Username and Password</h2>
          <div className="section" id="usernamePasswordInfo">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className="form-label">Username</Form.Label>

                <Form.Control
                  disabled
                  type="username"
                  defaultValue={userDetails.userNumber}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  disabled
                  type={showPassword ? "text" : "password"}
                  defaultValue={userDetails.pwd}
                />
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Show password"
                  onChange={handleTogglePassword}
                />
              </Form.Group>
              <Form.Text className="text-muted">
                * Please contact a lesson centre employee to update credentials
              </Form.Text>
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
                <Button
                  variant="dark"
                  type="submit"
                  id="notification-submit-btn"
                >
                  Save my preferences
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      ) : (
        <p>Error loading user information</p>
      )}
    </>
  );
};

export default account;
