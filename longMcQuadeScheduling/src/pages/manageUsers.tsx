import Header from "../components/Header";

const manageUsers = () => {
  return (
    <div
      style={{
        width: "100vw",
      }}
      className="private-route-body"
    >
      <div id="manage">
        <Header message="Manage Users" name=""></Header>
      </div>
      <a
        href="/addstudent"
        color="white"
        onClick={() => console.log("Clicked")}
      >
        Registration
      </a>
    </div>
  );
};

export default manageUsers;
