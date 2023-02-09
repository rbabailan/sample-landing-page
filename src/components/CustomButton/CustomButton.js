import style from "./CustomButton.module.css";

const CustomButton = (props) => {
  return (
    <a className={style.linkButton} hrefLang="#">
      {props.text}
    </a>
  );
};

export default CustomButton;
