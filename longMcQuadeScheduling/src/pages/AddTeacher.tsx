import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useUser } from "../components/UserContext";

interface TeacherState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  postCode: string;
  instrumentsTaught: string;
  starttime: string;
  endtime: string;
}

const AddTeacher = () => {
  const [teacher, setTeacher] = useState<TeacherState>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postCode: "",
    instrumentsTaught: "",
    starttime: "",
    endtime: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({
      ...prevTeacher,
      [name]: value,
    }));
  };

  const { userDetails } = useUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiEndpoint = "http://localhost:1919/users/teachers/add-teacher";
    const username = userDetails.userNumber;
    const password = userDetails.pwd;

    try {
      const response = await axios.post(apiEndpoint, teacher, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      console.log("Success:", response.data);
      alert("Teacher added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding teacher. Please try again.");
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
            value={teacher.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={teacher.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={teacher.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={teacher.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postCode"
            value={teacher.postCode}
            onChange={handleChange}
          />
        </label>

        <label>
          Instruments taught:
          <input
            type="text"
            name="instrumentsTaught"
            value={teacher.instrumentsTaught}
            onChange={handleChange}
          />
        </label>
        <label>
          Start time:
          <input
            type="text"
            name="starttime"
            value={teacher.starttime}
            onChange={handleChange}
          />
        </label>
        <label>
          End time:
          <input
            type="text"
            name="endtime"
            value={teacher.endtime}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTeacher;
