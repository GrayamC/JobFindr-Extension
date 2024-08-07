import "./App.css";
import MainButton from "./Components/MainButton/MainButton";
import Dropdowns from "./Components/Dropdowns/dropdowns";
import Logo from "./assets/JobFindrLogo.png";
import { useState } from "react";
import { getJobs } from "./Components/Jobs/fetchjobs";

function App() {
  //Compartmentalize state for all 3 values
  const [titleValue, setTitleValue] = useState("");

  const titleObject = {
    value: titleValue,
    set: setTitleValue,
  };

  const [expValue, setExpValue] = useState("");

  const expObject = {
    value: expValue,
    set: setExpValue,
  };

  const [commuteValue, setCommuteValue] = useState("");

  const commuteObject = {
    value: commuteValue,
    set: setCommuteValue,
  };

  const [searched, setSearched] = useState(false);

  /* const results = `
    <>
     <h1>Hello</h1>
     <p> hi</p>
    </>
  );`;*/

  async function getAPIResponse() {
    function toggleSearch() {
      console.log("fllipped");
      setSearched(true);
    }
    await toggleSearch();
    getJobs(commuteObject.value, expObject.value, titleObject.value);
    console.log(searched);
  }
  //Check if searched is set to true
  /*function checkSearched() {
    if (searched == true) {
      return <></>;
    }
  }*/

  return (
    <>
      <img className="logo mg-b-64" src={Logo}></img>
      <Dropdowns
        titleValue={titleObject}
        expValue={expObject}
        commuteValue={commuteObject}
      />
      <MainButton clickEvent={() => getAPIResponse()} text="Search Jobs" />
    </>
  );
}
export default App;
