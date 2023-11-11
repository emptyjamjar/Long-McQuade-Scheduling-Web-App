import Welcome from "../../components/Header";
import Table from "../../components/Table";
import Button from "../../components/Button";
import "./index.css";

const Home = () => {
  return (
    <div className="private-route-body" id="home">
      <Welcome message="Welcome" name="Ruth"></Welcome>
      <div id="lessonTable">
        <div id="lessonTableHeader">
          <h2 id="tableHeading">Upcoming Lessons</h2>
          <Button color="dark" onClick={() => console.log("Clicked")}>
            Subscribe to Calendar
          </Button>
        </div>
        <Table></Table>
      </div>
      <div id="lessonTable">
        <div id="lessonTableHeader">
          <h2 id="tableHeading">Lesson Change Requests</h2>
          <Button color="dark" onClick={() => console.log("Clicked")}>
            Request Change
          </Button>
        </div>
        <Table></Table>
      </div>
    </div>
  );
};

export default Home;
