import FadeIn from "../../Animation/FadeIn";
import style from "./PartnerShips.module.css";

const PartnerShips = () => {
  return (
    <div className={style.partnerContainer}>
      <div className={style.headLineWrapper}>
        <h2>International Academic Partnerships</h2>
      </div>
      <FadeIn>
        <div className={style.cardWrapper}>
          <img src="https://ik.imagekit.io/f2ityjkpdv/International-Academic-Partnerships-1__2_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675935396481" />
        </div>
      </FadeIn>
    </div>
  );
};

export default PartnerShips;
