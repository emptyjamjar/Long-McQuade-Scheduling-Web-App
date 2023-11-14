import Welcome from "../../components/Header";
import Table from "../../components/Table";
import Button from "react-bootstrap/esm/Button";
import "./index.css";

/* The homepage of the site */
// TODO: render different homepages depending on type of user (admin, teacher, student), give functionality
// to buttons
const Home = () => {
  return (
    <div className="private-route-body" id="home">
      <Welcome message="Welcome" name="Ruth"></Welcome>
      <div id="lessonTable">
        <div id="lessonTableHeader">
          <h2 id="tableHeading">Upcoming Lessons</h2>
<<<<<<< HEAD
          {/* Button not functional */}
          <Button variant="dark" onClick={() => console.log("Clicked")}>
=======
          <Button color="dark" onClick={() => console.log("Clicked")}>
>>>>>>> 52983a8c (Added username and password section to /account)
            Subscribe to Calendar
          </Button>
        </div>
        <Table></Table>
      </div>
      <div id="lessonTable">
        <div id="lessonTableHeader">
          <h2 id="tableHeading">Lesson Change Requests</h2>
          {/* Button not functional */}
          <Button variant="dark" onClick={() => console.log("Clicked")}>
            Request Change
          </Button>
        </div>
        <Table></Table>
      </div>
    </div>
  );
};

export default Home;
