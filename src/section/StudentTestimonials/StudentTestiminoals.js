import CardTestimonial from "../../components/CardTestimonials/CardTestimonials";
import style from "./StudentTestimonials.module.css";

const StudentTestimonials = () => {
  return (
    <div className={style.studentTestimonialsContainer}>
      <h2>Students Testimonials</h2>
      <div className={style.cardTestimonialsWrapper}>
        <CardTestimonial name="Ronald" avatarImg="s" />
        <CardTestimonial name="Ronald" avatarImg="s" />
        <CardTestimonial name="Ronald" avatarImg="s" />
      </div>
    </div>
  );
};

export default StudentTestimonials;
