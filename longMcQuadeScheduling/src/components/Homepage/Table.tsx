import Table from "react-bootstrap/Table";

/* Tables to display lesson information on the homepage */
const Tables = () => {
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
