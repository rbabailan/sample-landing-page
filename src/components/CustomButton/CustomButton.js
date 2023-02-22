import style from "./CustomButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router";

const CustomButton = (props) => {
  return (
    <Link className={style.linkButton} to={props.path}>
      {props.text}
      <FontAwesomeIcon
        className="pl-2"
        icon={icon({ name: "arrow-right", style: "solid" })}
      />
    </Link>
  );
};

export default CustomButton;
