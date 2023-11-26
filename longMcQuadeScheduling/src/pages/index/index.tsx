import Welcome from "../../components/Header";
import Table from "../../components/Table";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";
import LessonChangeModal from "../../components/LessonChangeModal";

/* The homepage of the site */
// TODO: render different homepages depending on type of user (admin, teacher, student), give functionality
// to buttons
const Home = () => {
  const [student, setStudent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1919/users/students/s"
        );
        // Assuming your backend returns the student info as JSON
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student information:", error);
        setError("Error fetching student information. Please try again.");
      }
    };

    fetchStudentInfo();
  }, []);

  return (
    <div className="private-route-body" id="home">
      {error ? (
        <Welcome message="Welcome" name="Back"></Welcome>
      ) : (
        <Welcome message="Welcome" name={student}></Welcome>
      )}

      <div id="lessonTable">
        <div id="lessonTableHeader">
          <h2 id="tableHeading">Upcoming Lessons</h2>
          {/* Button not functional */}
          <Button variant="dark" onClick={() => console.log("Clicked")}>
            Subscribe to Calendar
          </Button>
        </div>
        <Table></Table>
      </div>
      <div id="lessonTable">
        <div id="lessonTableHeader">
          <h2 id="tableHeading">Lesson Change Requests</h2>

          <LessonChangeModal></LessonChangeModal>
        </div>
        <Table></Table>
      </div>
    </div>
  );
};

export default Home;
