import "./MainButton.css";

export default function MainButton(props) {
  return (
    <button className="main-button fetch-jobs" onClick={props.clickEvent}>
      {props.text}
    </button>
  );
}
