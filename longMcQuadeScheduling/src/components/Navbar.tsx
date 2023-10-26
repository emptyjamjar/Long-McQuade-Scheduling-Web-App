import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
        collapseOnSelect
        sticky="top"
        style={{
          width: "200px",
          height: "100vh",
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
              display: "flex",
              alignItems: "center",
              paddingTop: "40%",
            }}
          >
            <Nav.Link style={linkStyle} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/account">
              Account
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/messages">
              Message
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/calendar">
              Calendar
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/my_schedule">
              My Schedule
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/profiles">
              Teacher Profiles
            </Nav.Link>
            <Nav.Link style={linkStyle} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default PageNavbar;
