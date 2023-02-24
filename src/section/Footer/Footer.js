import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#333333", color: "#F5F5F5" }}
      className="py-3 py-lg-4">
      <Row className="justify-content-between text-center p-0">
        <Col className="d-none d-lg-block" lg={4}>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              fontFamily: "'Architects Daughter', cursive",
              cursor: "pointer",
            }}>
            VIVO ACADEMY
          </Link>
        </Col>
        <Col
          className="d-flex justify-content-center align-self-center p-0 mb-2 mb-md-0"
          sm={12}
          md={6}
          lg={4}>
          <Stack direction="horizontal" gap={3}>
            <FooterLinks text="Benefits" />
            <FooterLinks text="Testimonials" />
            <FooterLinks text="Contact us" />
          </Stack>
        </Col>
        <Col
          className="d-flex justify-content-center p-0"
          sm={12}
          md={6}
          lg={4}>
          <Stack direction="horizontal" gap={2}>
            <RoundedLinks brands={brands("twitter")} />
            <RoundedLinks brands={brands("facebook-f")} />
            <RoundedLinks brands={brands("instagram")} />
            <RoundedLinks brands={brands("whatsapp")} />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

const FooterLinks = (props) => {
  return (
    <a className="text-decoration-none" style={{ color: "#F5F5F5" }} href="#">
      <p className="m-0">{props.text}</p>
    </a>
  );
};

const RoundedLinks = (props) => {
  return (
    <a className="inline-block" href="#">
      <button
        className="rounded-circle border-0"
        style={{ width: "36px", height: "36px" }}>
        <FontAwesomeIcon icon={props.brands} color="#0f0f0f" />
      </button>
    </a>
  );
};

export default Footer;
