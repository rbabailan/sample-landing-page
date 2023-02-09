import style from "./InfoSection.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const InfoSection = () => {
  return (
    <div className={style.infoContainer}>
      <div className={style.flexEndCenter}>
        <div className={style.infosWrapper}>
          <p>
            Achieve academic excellence while maintaining your career and
            lifestyle! Lincoln University of Business and Management presents a
            world of online degree opportunities in high-demand fields,
            specifically tailored for driven professionals in the Middle East,
            Africa, and the Indian Subcontinent.
          </p>
          <p>
            <b>"Join us now and take your first step towards success."</b>
          </p>
        </div>
        <div className={style.infoWrapper}>
          <div className={style.LogoWrapper}>
            <img src="https://ik.imagekit.io/f2ityjkpdv/lubm-white-logo-300x120.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675936324284" />
          </div>
          <h2>Avail Scholarship Offers</h2>
          <p>Hurry Up, Limited Seats Available!</p>
          <CustomButton text="Apply Now" link="" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
