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
          <Carousel
            variant="dark"
            interval={3000}
            indicators={false}
            style={{
              backgroundColor: "#F0F0F0",
              borderRadius: "20px",
            }}>
            {testimonialsData &&
              testimonialsData.map((data, index) => (
                <Carousel.Item key={index}>
                  <div className={style.testimonialContentWrapper}>
                    <Image
                      src={data.avatarImg}
                      roundedCircle={true}
                      width="90px"
                      height="90px"
                    />
                    <p className="m-4">{data.statement}</p>
                    <p>
                      <b>{`- ${data.name}, ${data.occupation}`}</b>
                    </p>
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default StudentTestimonials;
