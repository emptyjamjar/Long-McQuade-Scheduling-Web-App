import Table from "react-bootstrap/Table";

const Tables = () => {
<<<<<<< HEAD
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/lessons/")
      .then((response) => {
        setLessons(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lessons:", error);
      });
  }, []);

=======
>>>>>>> 5c24b20d (Changed back to hardcoding for now)
  const headings = [
    "Student",
    "Teacher",
    "Date",
    "Time",
    "Instrument",
    "Room",
    "Location",
  ];

  const lessons = [
    "Rhapsody Ruth",
    "Jana Janovsky",
    "Wednesday, October 25",
    "3:30pm",
    "Violin",
    "Room",
    "Saskatoon North",
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
<<<<<<< HEAD
        {lessons.map(
          (
            lesson,
            index // Map over the fetched 'lessons' array
          ) => (
            <tr id="row" key={index}>
              {/* <td style={style}>{lesson.studentNumber}</td>
              <td style={style}>{lesson.teacherNumber}</td>
              <td style={style}>{lesson.date}</td>
              <td style={style}>{lesson.startTime}</td>
              <td style={style}>{lesson.roomNumber}</td>
              <td style={style}>{lesson.date}</td>
              <td style={style}>{lesson.centreID}</td> */}
            </tr>
          )
        )}
=======
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
>>>>>>> 5c24b20d (Changed back to hardcoding for now)
      </tbody>
    </Table>
  );
};

export default Tables;
