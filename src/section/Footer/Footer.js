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
      style={{ borderTop: "1px solid #f0f0f0" }}
      className="p-5 mt-5">
      <Row className="justify-content-between text-center">
        <Col>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}>
            VIVO ACADEMY
          </Link>
        </Col>
        <Col className="d-flex justify-content-center align-self-center">
          <Stack direction="horizontal" gap={3}>
            <FooterLinks text="Benefits" />
            <FooterLinks text="Testimonials" />
            <FooterLinks text="Contact us" />
          </Stack>
        </Col>
        <Col className="d-flex justify-content-center">
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
    <a>
      <p className="m-0">{props.text}</p>
    </a>
  );
};

const RoundedLinks = (props) => {
  return (
    <a className="inline-block">
      <button
        className="rounded-circle border-0"
        style={{ width: "36px", height: "36px" }}>
        <FontAwesomeIcon icon={props.brands} color="#0f0f0f" size="lg" />
      </button>
    </a>
  );
};

export default Footer;
