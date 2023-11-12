import Header from "../components/Header";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const manageUsers = () => {
  
  const linkStyle = {
    color: "black",        // Text color
    textDecoration: "none", // Remove underline
    marginRight: "10px",    // Adjust spacing if needed
    fontSize: "16px",       // Font size
    fontWeight: "bold",     // Font weight
    cursor: "pointer",      // Show hand cursor on hover
  };
  const buttonStyleWhite = {
    backgroundColor: "white",    
    color: "#3498db",            
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

      <Nav.Link as={Link} style={buttonStyleWhite} to="/addstudent">
              Registration
            </Nav.Link>

      <Nav.Link as={Link} style={buttonStyleWhite} to="/unenrollment">
              Unenrollment
            </Nav.Link>

      <Nav.Link as={Link} style={buttonStyleWhite} to="/teachersProfiles">
              Teachers Profiles
            </Nav.Link>

      <Nav.Link as={Link} style={buttonStyleWhite} to="/studentProfiles">
              Student Profiles
            </Nav.Link>
      <Nav.Link as={Link} style={buttonStyleWhite} to="/accessCodes">
              Access Codes
            </Nav.Link>
    </div>
  );
};

export default manageUsers;