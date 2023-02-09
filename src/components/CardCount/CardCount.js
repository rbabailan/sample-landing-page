import style from "./CardCount.module.css";

const CardCount = (props) => {
  <div>
    <div>{props.icon}</div>
    <div>
      <h3>{props.count}</h3>
      <p>{props.title}</p>
    </div>
  </div>;
};

export default CardCount;
