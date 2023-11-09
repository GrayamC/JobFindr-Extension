import "./dropdowns.css";
import { useState } from "react";

export default function Dropdowns() {
  const [expValue, setExpValue] = useState("");

  function updateExp(event) {
    setExpValue(event.target.value);
  }

  return (
    //Input Holder
    <div className="dropdown-area">
      <label htmlFor="title" className="mg-b-8">
        Desired Job Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Product Designer, Engineer, etc."
        className="mg-b-40"
        onChange={updateExp}
        value={expValue}
      />

      <label htmlFor="exp" className="mg-b-8">
        Desired Experience Level
      </label>
      <select id="exp" name="exp" className="mg-b-40">
        <option value="junior">Entry Level</option>
        <option value="mid-level">Mid Level</option>
        <option value="senior">Senior Level</option>
      </select>

      <label htmlFor="commute" className="mg-b-8">
        Desired Commute Type
      </label>
      <select id="commute" name="commute" className="mg-b-40">
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
        <option value="onsite">On site</option>
      </select>
    </div>
  );
}
