import Welcome from "../components/Homepage/WelcomeText";
import Table from "../components/Homepage/Table";
import Button from "../components/Button";
import "../App.css";

const Home = () => {
  return (
    <>
      <Welcome></Welcome>
      <h2 id="tableHeading">Upcoming Lessons</h2>
      <Table></Table>
      <div id="lessonChangeRequestHeader">
        <h2 id="tableHeading">Lesson Change Requests</h2>
        <Button color="dark" onClick={() => console.log("Clicked")}>
          Request Change
        </Button>
      </div>
      <Table></Table>
    </>
  );
};

export default Home;
