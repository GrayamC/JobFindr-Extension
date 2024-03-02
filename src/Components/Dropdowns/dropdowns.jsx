import "./dropdowns.css";

export default function Dropdowns(props) {
  function updateTitle(event) {
    props.titleValue.set(event.target.value);
  }
  function updateExp(event) {
    props.expValue.set(event.target.value);
  }
  function updateCommute(event) {
    props.commuteValue.set(event.target.value);
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
        onChange={updateTitle}
        value={props.titleValue.value}
      />

      <label htmlFor="exp" className="mg-b-8">
        Current Experience Level
      </label>
      <select id="exp" name="exp" className="mg-b-40" onChange={updateExp}>
        <option value="junior">Select current experience</option>
        <option value="junior">Entry Level</option>
        <option value="mid-level">Mid Level</option>
        <option value="senior">Senior Level</option>
      </select>

      <label htmlFor="commute" className="mg-b-8">
        Desired Commute Type
      </label>
      <select
        id="commute"
        name="commute"
        className="mg-b-40"
        onChange={updateCommute}
      >
        <option value="remote">Select desired commute</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
        <option value="onsite">On site</option>
      </select>
    </div>
  );
}
