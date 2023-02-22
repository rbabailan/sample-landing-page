import style from "./StudentTestimonials.module.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { testimonialsData } from "../../data/testimonialsData";

const StudentTestimonials = () => {
  return (
    <Container fluid="xxl" className="mt-5 mb-5">
      <div className={style.studentTestimonialsContainer}>
        <h2 className="pb-4">Testimonials</h2>
        <div className={style.cardTestimonialsWrapper}>
          <Carousel variant="dark" interval={3000} indicators={false}>
            {testimonialsData &&
              testimonialsData.map((data, index) => (
                <Carousel.Item
                  key={index}
                  className={style.testimonialContentWrapper}>
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
  );
};

export default StudentTestimonials;
