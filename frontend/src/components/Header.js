import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/Logo.svg";

const navbarStyle = {
  backgroundColor: "#eeeeeeee",
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '2rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
