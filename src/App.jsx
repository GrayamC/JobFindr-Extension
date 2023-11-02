import "./App.css";
import MainButton from "./Components/MainButton/MainButton";
import Dropdowns from "./Components/Dropdowns/dropdowns";
import Logo from "./assets/JobFindrLogo.png";
import Jobs from "./Components/Jobs/Jobs";

function App() {
  let apiCalled;
  if (apiCalled == false) {
    return (
      <>
        <img className="logo mg-b-64" src={Logo}></img>
        <Dropdowns />
        <MainButton className="fetch-jobs" text="Search Jobs" />
      </>
    );
  } else {
    return (
      <>
        <img className="logo mg-b-64" src={Logo}></img>
        <Jobs />
        <MainButton className="fetch-account" text="Save To Account" />
      </>
    );
  }
}

export default App;
