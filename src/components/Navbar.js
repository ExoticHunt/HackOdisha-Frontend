import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";

const NavComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">Exotic Hunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">DashBoard</Nav.Link>
            <Nav.Link href="/todo">To-Do</Nav.Link>
            <Nav.Link href="/meds">Meds</Nav.Link>
            <Nav.Link href="/*">Community</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="sm">
              <SearchIcon />
            </Button>
          </Form>
          <Nav className="justify-content-end flex-grow-2">
              <Nav.Link href="/sign-in">
                <Button variant="outline-light" size="sm">Sign in</Button>
              </Nav.Link>
              <Nav.Link href="/sign-out">
                <Button variant="outline-light" size="sm">Sign out</Button>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
