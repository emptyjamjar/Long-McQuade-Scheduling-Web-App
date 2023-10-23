import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from "axios";

// TODO: uncomment when able to get the lesson data, need to figure out
const Tables = () => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/lessons/")
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

  const style = {
    width: "8rem",
    backgroundColor: "#F5F1ED",
    fontFamily: "Raleway",
    fontSize: "14px",
  };

  //   TODO: insert lesson information below.. hardcoded for now

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
        {lessons.map(
          (
            lesson,
            index // Map over the fetched 'lessons' array
          ) => (
            <tr id="row" key={index}>
              <td style={style}>{lesson.studentNumber}</td>
              <td style={style}>{lesson.teacherNumber}</td>
              <td style={style}>{lesson.date}</td>
              <td style={style}>{lesson.startTime}</td>
              <td style={style}>{lesson.roomNumber}</td>
              <td style={style}>{lesson.date}</td>
              <td style={style}>{lesson.centreID}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};

export default Tables;
