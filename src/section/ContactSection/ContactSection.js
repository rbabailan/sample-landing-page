import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import contactImg from "../../img/contactImg.jpg";
import { Element } from "react-scroll";

const ContactSection = () => {
  return (
    <Element name="contact" className="element">
      <Container fluid="xxl">
        <h2 className="p-4 text-center">Get in Touch</h2>
        <Row>
          <Col className="d-none d-md-block p-0">
            <img
              src={contactImg}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col className="p-0">
            <Form className="p-4 h-100">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="font-weight-light">Name</Form.Label>
                <Form.Control type="Name" placeholder="Name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-weight-light">
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-light">Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button
                className="rounded-pill pl-3 pr-3 float-end"
                type="submit"
                style={{ backgroundColor: "#4db6ac", border: "none" }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default ContactSection;
