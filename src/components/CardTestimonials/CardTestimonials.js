import style from "./CardTestimonials.module.css";

const CardTestimonial = (props) => {
  return (
    <div className={style.cardTestimonialWrapper}>
      <div className={style.profileStyles}>
        <img
          className={style.avatarStyles}
          src={props.AvatarImg}
          width="56px"
          height="56px"
        />
        <p>{props.name}</p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          faucibus odio sed commodo imperdiet. Suspendisse ac velit sapien. Sed
          in ipsum est. Aenean dolor arcu, lacinia et vestibulum ut, aliquet sed
          est.
        </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
