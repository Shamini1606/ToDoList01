import React from "react";
import "./AddTask.css";
const AddTask = (props) => {
  const [input, setInput] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit({
      text: input,
      inComplete: false,
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <center>
      <div className="Add-Task">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add task e.g => Conference meeting at 2 pm"
            onChange={handleChange}
            value={input}
          />
          <input type="submit" value="+" />
        </form>
      </div>
    </center>
  );
};
export default AddTask;
