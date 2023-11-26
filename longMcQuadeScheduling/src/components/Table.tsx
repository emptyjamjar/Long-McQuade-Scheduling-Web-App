import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

/* Tables to display lesson information on the homepage.
Uses react-bootstrap components and inline css for styling.  */

const Tables = () => {
  const [lesson, setLesson] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1919/lessons/")
      .then((response) => {
        setLesson(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
      });
  }, []);

  const headings = [
    "Student",
    "Teacher",
    "Date",
    "Time",
    "Instrument",
    "Room",
    "Location",
  ];

  //   TODO: insert lesson information below.. hardcoded for now
  const lessons = [
    "Rhapsody Ruth",
    "Jana Janovsky",
    "Wednesday, October 25",
    "3:30pm",
    "Violin",
    "Room",
    "Saskatoon North",
  ];

  // Styling for the table rows
  const style = {
    width: "2rem",
    backgroundColor: "#F5F1ED",
    fontFamily: "Raleway",
    fontSize: "14px",
  };

  return (
    <Table responsive hover bordered size="sm">
      <thead>
        <tr id="row">
          {headings.map((heading) => (
            <th style={style} key={heading}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr id="row">
          {lessons.map((lesson) => (
            <td key={lesson} style={style}>
              {lesson}
            </td>
          ))}
        </tr>
        <tr id="row">
          {lessons.map((lesson) => (
            <td key={lesson} style={style}>
              {lesson}
            </td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default Tables;
