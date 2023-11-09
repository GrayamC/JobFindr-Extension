import "./App.css";
import MainButton from "./Components/MainButton/MainButton";
import Dropdowns from "./Components/Dropdowns/dropdowns";
import Logo from "./assets/JobFindrLogo.png";

function App() {
  const expDropdown = document.getElementById("exp");
  const commuteDropdown = document.getElementById("commute");
  const jobTitle = document.getElementById("title");

  return (
    <>
      <img className="logo mg-b-64" src={Logo}></img>
      <Dropdowns />
      <MainButton clickEvent={() => console.log("hello")} text="Search Jobs" />
    </>
  );
}
export default App; //bigbootylatinas
