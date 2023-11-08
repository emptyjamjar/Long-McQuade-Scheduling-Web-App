import React, { useEffect, useState } from "react";
import "./account.css";
import axios from "axios";

const account = () => {
  const [user, setUser] = useState(null);

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

  return (
    <div id="account" className="private-route-body">
      <h2 id="sectionHeading">Student</h2>
      <div id="userInfo">
        <div>
          <h3 id="infoHeading">First Name</h3>
          <p></p>
        </div>
        <div>
          <h3 id="infoHeading">Last Name</h3>
          <p>Ruth</p>
        </div>
        <div>
          <h3 id="infoHeading">Date of Birth</h3>
          <p>July 20, 1969</p>
        </div>
      </div>
      <div id="userInfo">
        <div>
          <h3 id="infoHeading">Mobile</h3>
          <p>(123) 123 1234</p>
        </div>
        <div>
          <h3 id="infoHeading">Home</h3>
          <p>(456) 456 4567</p>
        </div>
        <div>
          <h3 id="infoHeading">Work</h3>
          <p>N/A</p>
        </div>
      </div>
      <div id="userInfo">
        <div>
          <h3 id="infoHeading">Primary Email</h3>
          <p>rhapsodyruth@email.com</p>
        </div>
        <div>
          <h3 id="infoHeading">Alternate Email</h3>
          <p>rollingruth@mail.work.ca</p>
        </div>
      </div>
      <div id="userInfo">
        <div>
          <h3 id="infoHeading">Current Teachers</h3>
          <p>Jana Janovsky</p>
        </div>
        <div>
          <h3 id="infoHeading">Instruments</h3>
          <p>Violin</p>
        </div>
        <div>
          <h3 id="infoHeading">Skill Level</h3>
          <p>Beginner</p>
        </div>
      </div>
    </div>
  );
};

export default account;
