import Header from "../components/Header";
<<<<<<< HEAD

const manageUsers = () => {
  return (
    <div
      style={{
        
        width: "100vw",
        
      }}
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
=======
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const manageUsers = () => {

  const buttonStyle = {
    backgroundColor: "orange",    
    color: "black",            
    padding: "10px 20px",        
    margin: "5px",               
    borderRadius: "5px",         
    textDecoration: "none",      
    display: "inline-block",     
    fontSize: "16px",            
    cursor: "pointer",           
  };

  return (
    <div style={{ width: "100vw" }}>
      <div id="manage">
        <Header message="Manage Users" name="" />
      </div>

      <Nav.Link as={Link} style={buttonStyle} to="/addstudent">
              Registration
            </Nav.Link>

      <Nav.Link as={Link} style={buttonStyle} to="/unenrollment">
              Unenrollment
            </Nav.Link>

      <Nav.Link as={Link} style={buttonStyle} to="/teachersProfiles">
              Teachers Profiles
            </Nav.Link>

      <Nav.Link as={Link} style={buttonStyle} to="/studentProfiles">
              Student Profiles
            </Nav.Link>
      <Nav.Link as={Link} style={buttonStyle} to="/accessCodes">
              Access Codes
            </Nav.Link>
>>>>>>> 7af9c2d53f498ed5c2ab38ddc33b3f6ba9f79a9f
    </div>
  );
};

<<<<<<< HEAD
export default manageUsers;
=======
export default manageUsers;
>>>>>>> 7af9c2d53f498ed5c2ab38ddc33b3f6ba9f79a9f
