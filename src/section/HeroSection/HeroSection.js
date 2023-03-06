import CustomButton from "../../components/CustomButton/CustomButton";
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
            <CustomButton text="Apply now" />
          </Col>
          <Col className="d-none d-md-block">
            <a href="#">
              <img
                loading="lazy"
                className="h-100 w-100"
                src="https://ik.imagekit.io/f2ityjkpdv/vivo-academy/tr:w-1400,h-auto/heroImg-min.png?"
                srcSet="https://ik.imagekit.io/f2ityjkpdv/vivo-academy/tr:w-480,h-auto/heroImg-min.png? 470w, https://ik.imagekit.io/f2ityjkpdv/vivo-academy/tr:w-800,h-auto/heroImg-min.png? 1400w"
                alt="hero-section-img"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default HeroSection;
