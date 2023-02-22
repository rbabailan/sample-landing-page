import style from "./StudentTestimonials.module.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const StudentTestimonials = () => {
  return (
    <Container fluid="xxl" className="mt-5 mb-5">
      <div className={style.studentTestimonialsContainer}>
        <h2>Students Testimonials</h2>
        <div className={style.cardTestimonialsWrapper}>
          <Carousel
            variant="dark"
            interval={3000}
            indicators={false}
            style={{
              backgroundColor: "#F0F0F0",
              borderRadius: "20px",
            }}>
            <Carousel.Item>
              <div className={style.testimonialContentWrapper}>
                <Image
                  src="https://ik.imagekit.io/f2ityjkpdv/Testimonials/jurica-koletic-7YVZYZeITc8-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676895305301&tr=w-1080%2Ch-1080%2Cfo-auto"
                  roundedCircle={true}
                  width="90px"
                  height="90px"
                />
                <p className="pt-2">
                  I had an amazing experience studying at this school! The
                  teachers were knowledgeable and supportive, and the curriculum
                  was challenging yet engaging. I would highly recommend this
                  institution to anyone looking for a quality education.
                </p>
                <h5>- Jane Doe, Graphic Designer</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={style.testimonialContentWrapper}>
                <Image
                  src="https://ik.imagekit.io/f2ityjkpdv/logo500.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674917453452"
                  roundedCircle={true}
                  width="90px"
                  height="90px"
                />
                <p className="pt-2">
                  "I was initially hesitant about pursuing further education,
                  but the staff and faculty at this school made me feel right at
                  home. The resources available to students are unparalleled,
                  and I am grateful for the connections I made here."
                </p>
                <h5>- John Smith, Marketing Manager</h5>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={style.testimonialContentWrapper}>
                <Image
                  src="https://ik.imagekit.io/f2ityjkpdv/logo500.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674917453452"
                  roundedCircle={true}
                  width="90px"
                  height="90px"
                />
                <p className="pt-2">
                  Attending this institution was a life-changing experience for
                  me. The personalized attention from professors and the
                  hands-on learning opportunities allowed me to discover my true
                  passions and excel in my field.
                </p>
                <h5>- John Smith, Marketing Manager</h5>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default StudentTestimonials;
