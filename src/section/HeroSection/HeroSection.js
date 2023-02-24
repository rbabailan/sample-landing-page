import CustomButton from "../../components/CustomButton/CustomButton";
import heroImg from "../../img/heroImg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Element } from "react-scroll";

const HeroSection = () => {
  return (
    <Element name="hero">
      <Container fluid="xxl">
        <Row
          className="d-flex vh-100 align-items-center"
          style={{ maxHeight: "1080px" }}>
          <Col>
            <h1 className="m-0">
              Empower Your Future with{" "}
              <span
                style={{
                  color: "#0077b6",
                }}>
                Vivo Academy
              </span>
            </h1>
            <p className="my-2">
              Unlock Your Potential and Achieve Success with Our Innovative
              Programs.
            </p>
            <CustomButton text="Apply now" link="# " />
          </Col>
          <Col className="d-none d-md-block">
            <img src={heroImg} alt="hero-img" width="100%" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default HeroSection;
