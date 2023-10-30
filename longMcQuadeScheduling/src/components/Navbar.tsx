import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"

/* 
Navbar is the left aligned orange column with links to different pages of the website.
Uses react-bootstrap items and inline css.
TODO: Figure out spacing on links, route to correct pages when established
 */
function PageNavbar() {
  const linkStyle = { margin: ".2rem" };

  return (
    <>
      <Navbar
        id="navbar"
        sticky="top"
        style={{
          width: "200px",
          height: "86.9vh",
          fontFamily: "Raleway",
          textTransform: "uppercase",
        }}
        bg="primary"
        data-bs-theme="dark"
      >
        <Container>
          <Nav
            justify
            variant="underline"
            className="flex-column"
            activeKey={location.pathname}
            style={{
              fontSize: "14px",
              fontWeight: "lighter",
              alignItems: "center",
            }}
          >
<<<<<<< HEAD
            <Nav.Link style={linkStyle} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/account">
=======
            <Nav.Link as={Link} style={linkStyle} to="/account">
>>>>>>> 6cd00aaa872bebcc6b971c61c8ba8229a99ab05a
              Account
            </Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/messages">
              Message
            </Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/calendar">
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/my_schedule">
              My Schedule
            </Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/profiles">
              Teacher Profiles
            </Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} style={linkStyle} to="/manageUsers">
              Manage Users
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PageNavbar;
