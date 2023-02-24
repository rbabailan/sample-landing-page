import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-scroll";

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

    document.querySelector("#toggleButton").addEventListener("click", () => {
      if (
        document.querySelector("#toggleButton").className.includes("collapsed")
      ) {
        setBorder("shadow-sm");
      } else {
        if (window.scrollY > 0) {
          setBorder("shadow-sm");
        } else {
          setBorder("shadow-none");
        }
      }
    });
  });

  return (
    <Navbar expand="md" fixed="top" bg="white" className={`${border}`}>
      <Container fluid="xxl" className="pt-2 pb-2">
        <Navbar.Brand
          href="#"
          style={{
            fontFamily: "'Architects Daughter', cursive",
          }}>
          VIVO ACADEMY
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="border-0"
          id="toggleButton"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3" navbarScroll>
            <Link
              className="py-1 px-md-2 ml-2"
              activeClass="active"
              to="benefits"
              spy={true}
              smooth={true}
              offset={-90}
              style={{ cursor: "pointer" }}>
              Benefits
            </Link>
            <Link
              className="py-1 px-md-2 ml-2"
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-90}
              style={{ cursor: "pointer" }}>
              Testimonials
            </Link>
            <Link
              className="py-1 px-md-2 ml-2"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              style={{ cursor: "pointer" }}>
              Contact us
            </Link>
          </Nav>
          <CustomButton text="Inquire now" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
