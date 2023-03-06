import style from "./StudentTestimonials.module.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { testimonialsData } from "../../data/testimonialsData";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const StudentTestimonials = () => {
  return (
    <Element name="testimonials" className="element">
      <Container fluid="xxl" className="mt-5 mb-5">
        <div className={style.studentTestimonialsContainer}>
          <h2 className="pb-4">Testimonials</h2>
          <div className={`${style.cardTestimonialsWrapper} rounded-4`}>
            <Carousel interval={5000} variant="dark" indicators={false}>
              {testimonialsData &&
                testimonialsData.map((data, index) => (
                  <Carousel.Item
                    key={index}
                    className={style.testimonialContentWrapper}>
                    <FontAwesomeIcon
                      className="mb-3"
                      icon={icon({
                        name: "quote-left-alt",
                        style: "solid",
                      })}
                      size="2x"
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                      }}
                    />
                    <Image
                      src={data.avatarImg}
                      roundedCircle={true}
                      width="90px"
                      height="90px"
                    />
                    <p className="fw-light m-4">{data.statement}</p>
                    <p className="fw-normal">{`- ${data.name}, ${data.occupation}`}</p>
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default StudentTestimonials;
