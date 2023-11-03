import "./App.css";
import MainButton from "./Components/MainButton/MainButton";
import Dropdowns from "./Components/Dropdowns/dropdowns";
import Logo from "./assets/JobFindrLogo.png";

function App() {
  const clicked = () => console.log("clicked");
  return (
    <>
      <img className="logo mg-b-64" src={Logo}></img>
      <Dropdowns />
      <MainButton clickEvent={clicked} text="Search Jobs" />
    </>
  );
}
export default App;
