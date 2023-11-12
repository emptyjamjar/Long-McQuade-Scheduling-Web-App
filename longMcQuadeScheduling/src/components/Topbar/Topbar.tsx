import wordLogo from "../../assets/logo-words.png";
import messageIcon from "../../assets/995789_comment_communication_message_messages_icon.svg";
import phoneIcon from "../../assets/9023670_phone_call_fill_icon.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Topbar.css";

/* 
  Topbar is the section at the top of the screen where the logo, message icon, contact icon, and sign out option
  live. Has it's own css file for styling.
 */
const Top = () => {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="sm"
      id="topContainer"
      className="navbar fixed-top navbar-light bg-background"
    >
      <Container fluid>
        <Row>
          <Navbar.Brand className="navbar-brand" href="/">
            <img
              src={wordLogo}
              id="wordLogo"
              width="160px"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </Row>
        <Row>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              justify
              variant="underline"
              className="justify-content-end"
              style={{
                fontSize: "14px",
                fontWeight: "lighter",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Nav.Link id="iconLink" href="/messages">
                <img src={messageIcon} width="30px" alt="Message Icon" />
              </Nav.Link>
              <Nav.Link id="iconLink" href="/contact">
                <img src={phoneIcon} width="30px" alt="Phone Icon" />
              </Nav.Link>
              <div id="wordLinks">
                <Nav.Link id="signOut" href="/">
                  Sign Out
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Top;
