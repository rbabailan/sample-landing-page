import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <Container
      fluid="xxl"
      style={{ borderTop: "1px solid #f0f0f0" }}
      className="p-5 mt-5">
      <Row>
        <Col>
          <h5>Content</h5>
          <div
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "#0077b6",
            }}></div>
          <FooterLinks text="Benefits" />
          <FooterLinks text="Testimonials" />
          <FooterLinks text="Contact us" />
        </Col>
        <Col>
          <h5>Follow us</h5>
          <div
            className="my-2"
            style={{
              width: "80px",
              height: "2px",
              backgroundColor: "#0077b6",
            }}></div>
          <Stack direction="horizontal" gap={1}>
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
