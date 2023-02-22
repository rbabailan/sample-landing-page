import style from "./CustomButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-scroll";

const CustomButton = (props) => {
  return (
    <Link
      activeClass="active"
      className={style.linkButton}
      to="contact"
      spy={true}
      smooth={true}
      duration={500}>
      {props.text}
      <FontAwesomeIcon
        className="pl-2"
        icon={icon({ name: "arrow-right", style: "solid" })}
      />
    </Link>
  );
};

export default CustomButton;
