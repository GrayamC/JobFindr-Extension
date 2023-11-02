import "./App.css";
import MainButton from "./Components/MainButton/MainButton";
import Dropdowns from "./Components/Dropdowns/dropdowns";
import Logo from "./assets/JobFindrLogo.png";

function App() {
  return (
    <>
      <img className="logo mg-b-64" src={Logo}></img>
      <Dropdowns />
      <MainButton text="Search Jobs" />
    </>
  );
}

export default App;
