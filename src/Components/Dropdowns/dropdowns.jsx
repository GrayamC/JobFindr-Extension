import "./dropdowns.css";

export default function Dropdowns() {
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
      />

      <label htmlFor="exp" className="mg-b-8">
        Desired Experience Level
      </label>
      <select id="exp" name="exp" className="mg-b-40">
        <option value="entry">Entry Level</option>
        <option value="mid">Mid Level</option>
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
