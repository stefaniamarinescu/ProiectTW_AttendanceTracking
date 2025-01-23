import React, { useState } from "react";
import axios from "axios";
import styles from "./AddEvent.module.css";

function AddEvent(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCode, setEnteredCode] = useState("");

  const handleInputNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleInputCodeChange = (event) => {
    setEnteredCode(event.target.value);
  };
  const addEvent = (e) => {
    e.preventDefault();
    const inputs = {
      name: enteredName,
      text: enteredCode,
      isOpen: 1,
      EventGroupId: props.eventGroup.id,
    };

    axios
      .post("http://localhost:8080/api/event", inputs)
      .then((response) => {
        props.addEvent(response.data);
      })
      .catch((err) => console.log("Error to axios addEvent:", err));
  };
  return (
    <form className={styles.mainContainer} onSubmit={addEvent}>
      <label>Name event:</label>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputNameChange}
      />
      <label>Code:</label>
      <input
        className={styles.input}
        type="text"
        onChange={handleInputCodeChange}
      />
      <button className={styles.buttonStyle}>Save</button>
    </form>
  );
}

export default AddEvent;
