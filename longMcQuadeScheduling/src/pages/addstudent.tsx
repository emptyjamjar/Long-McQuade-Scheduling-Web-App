import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Header from "../components/Header";

interface StudentState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  postCode: string;
  phoneNumber: string;
  instrumentsPlayed: string;
  experience: string;
  yearOfBirth: string;
}

const AddStudent = () => {
  const [student, setStudent] = useState<StudentState>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postCode: "",
    phoneNumber: "",
    instrumentsPlayed: "",
    experience: "",
    yearOfBirth: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiEndpoint = "http://localhost:1919/users/students/add-student";
    const username = "A1";
    const password = "admin";

    try {
      const response = await axios.post(apiEndpoint, student, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`, // Basic Authentication Header
        },
      });

      console.log("Success:", response.data);
      alert("Student added successfully!");
      // Optionally reset form or handle redirection
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding student. Please try again.");
    }
  };

  return (
    <div className="private-route-body">
      <Header message="Registration" name="name" />
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={student.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postCode"
            value={student.postCode}
            onChange={handleChange}
          />
        </label>
        <label>
          Email Address:
          <input
            type="text"
            name="email"
            value={student.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Instruments played:
          <input
            type="text"
            name="instrumentsPlayed"
            value={student.instrumentsPlayed}
            onChange={handleChange}
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            name="experience"
            value={student.experience}
            onChange={handleChange}
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="yearOfBirth"
            value={student.yearOfBirth}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddStudent;
