import CardTestimonial from "../../components/CardTestimonials/CardTestimonials";
import style from "./StudentTestimonials.module.css";
import FadeIn from "../../Animation/FadeIn";

const StudentTestimonials = () => {
  return (
    <FadeIn>
      <div className={style.studentTestimonialsContainer}>
        <h2>Students Testimonials</h2>
        <div className={style.cardTestimonialsWrapper}>
          <CardTestimonial name="Ronald" avatarImg="" />
          <CardTestimonial name="Ronald" avatarImg="s" />
          <CardTestimonial name="Ronald" avatarImg="s" />
        </div>
      </div>
    </FadeIn>
  );
};

export default StudentTestimonials;
