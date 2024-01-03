import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useUser } from "../components/UserContext";

interface LessonState {
  snum: string;
  tnum: string;
  centrenum: string;
  starttime: string;
  endtime: string;
  roomnumber: string;
  date: string;
  dayofweek: string;
}

const AddLesson = () => {
  const [lesson, setLesson] = useState<LessonState>({
    snum: "",
    tnum: "",
    centrenum: "",
    starttime: "",
    endtime: "",
    roomnumber: "",
    date: "",
    dayofweek: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLesson((prevLesson) => ({
      ...prevLesson,
      [name]: value,
    }));
  };

  const { userDetails } = useUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiEndpoint = "http://localhost:1919/lessons/new-lesson";
    const username = userDetails.userNumber;
    const password = userDetails.pwd;

    try {
      const response = await axios.post(apiEndpoint, lesson, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });

      console.log("Success:", response.data);
      alert("Lesson added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding Lesson. Please try again.");
    }
  };

  return (
    <div className="private-route-body">
      <h1>Add Lesson</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Student number:
          <input
            type="text"
            name="snum"
            value={lesson.snum}
            onChange={handleChange}
          />
        </label>
        <label>
          Teacher number:
          <input
            type="text"
            name="tnum"
            value={lesson.tnum}
            onChange={handleChange}
          />
        </label>
        <label>
          Lesson centre number:
          <input
            type="text"
            name="centrenum"
            value={lesson.centrenum}
            onChange={handleChange}
          />
        </label>
        <label>
          Lesson date:
          <input
            type="date"
            name="date"
            value={lesson.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Day of week:
          <input
            type="text"
            name="dayofweek"
            value={lesson.dayofweek}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Time:
          <input
            type="text"
            name="starttime"
            value={lesson.starttime}
            onChange={handleChange}
          />
        </label>
        <label>
          End time:
          <input
            type="text"
            name="endtime"
            value={lesson.endtime}
            onChange={handleChange}
          />
        </label>
        <label>
          Room number:
          <input
            type="text"
            name="roomnumber"
            value={lesson.roomnumber}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddLesson;
