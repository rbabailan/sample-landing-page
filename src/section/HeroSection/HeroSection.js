import style from "./HeroSection.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const HeroSection = () => {
  return (
    <div className={style.heroContainer}>
      <div className={style.flexCenter}>
        <div className={style.heroWrapper}>
          <div className={style.LogoWrapper}>
            <img
              src="https://ik.imagekit.io/f2ityjkpdv/lubm-white-logo-300x120.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675936324284"
              alt="Lincoln University Business and Management Logo"
            />
          </div>
          <h2>Full Time Online MBA Programs in 12 Months</h2>
          <p>
            The MBA degree awarded by the University is exactly the same as
            on-campus MBA students, with no mention of the word ‘Online’ or
            ‘Distance-learning’ on the degree.
          </p>
          <CustomButton text="Free Career Counselling" link="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
