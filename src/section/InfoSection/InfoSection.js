import style from "./InfoSection.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import infoImg from "../../img/infoImg.png";
import infoImg2 from "../../img/infoImg2.png";
import infoImg3 from "../../img/infoImg3.png";
import { Element } from "react-scroll";

const InfoSection = () => {
  return (
    <Element name="benefits">
      <Container fluid="xxl">
        <div className={style.flexEndCenter}>
          <h2 className="text-center">
            "Unlock Your Potential: Experience the Life-Changing Benefits of
            Enrolling in Vivo Academy!"
          </h2>
        </div>
        <Row className="d-flex flex-wrap-reverse align-items-center my-4 my-lg-0">
          <Col xs={12} sm={6} md={6}>
            <h4>Innovative Programs</h4>
            <p>
              Vivo Academy offers cutting-edge programs and courses that are
              designed to prepare students for the demands of the modern
              workforce. Our curriculum is constantly updated to reflect the
              latest trends and developments in each field, ensuring that our
              graduates have the skills and knowledge they need to succeed.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <img src={infoImg} width="100%" />
          </Col>
        </Row>
        <Row className="d-flex align-items-center my-4 my-lg-0">
          <Col xs={12} sm={6} md={6}>
            <img src={infoImg2} width="100%" />
          </Col>
          <Col xs={12} sm={6} md={6}>
            <h4>Expert Instructors</h4>
            <p>
              Our experienced instructors are passionate about education and
              dedicated to helping students achieve their goals. They are
              subject matter experts with extensive industry experience, and are
              committed to providing personalized guidance and support to each
              and every student.
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-wrap-reverse align-items-center my-4 my-lg-0">
          <Col xs={12} sm={6} md={6}>
            <h4>Flexible Learning</h4>
            <p>
              We understand that students have different schedules and learning
              styles, which is why we offer a range of flexible learning
              options, including online classes and self-paced programs. Our
              goal is to make education accessible to everyone, regardless of
              their location or lifestyle, and to provide a learning experience
              that fits their individual needs.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <img src={infoImg3} width="100%" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default InfoSection;
