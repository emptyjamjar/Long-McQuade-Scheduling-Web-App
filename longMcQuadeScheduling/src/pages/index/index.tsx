import Welcome from "../../components/Header";
import Table from "../../components/Table";
import Button from "react-bootstrap/esm/Button";
import "./index.css";
import LessonChangeModal from "../../components/LessonChangeModal";
import { useUser } from "../../components/UserContext";

/* The homepage of the site */
// TODO: render different homepages depending on type of user (admin, teacher, student), give functionality
// to buttons
const Home = () => {
  const { userDetails } = useUser();

  return (
    <div className="private-route-body" id="home">
      {!userDetails.firstName ? (
        <Welcome message="Welcome" name="Back"></Welcome>
      ) : (
        <Welcome message="Welcome" name={userDetails.firstName}></Welcome>
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
