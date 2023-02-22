import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomButton from "../CustomButton/CustomButton";

const NavigationBar = () => {
  const [border, setBorder] = useState("shadow-none");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBorder("shadow-sm");
      } else {
        setBorder("shadow-none");
      }
    });
  });

  return (
    <Navbar expand="md" fixed="top" bg="white" className={border}>
      <Container fluid="xxl" className="pt-2 pb-2">
        <Navbar.Brand
          href="#"
          style={{
            fontFamily: "'Architects Daughter', cursive",
            fontWeight: "bold",
          }}>
          VIVO ACADEMY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
            <Nav.Link href="#action1">Benefits</Nav.Link>
            <Nav.Link href="#action2">Testimonials</Nav.Link>
            <Nav.Link href="#action3">Contact us</Nav.Link>
          </Nav>
          <CustomButton text="Apply Now" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
