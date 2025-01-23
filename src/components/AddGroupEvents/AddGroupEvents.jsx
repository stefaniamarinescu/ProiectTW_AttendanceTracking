import React, { useState } from "react";
import axios from "axios";
import styles from "./AddGroupEvents.module.css";

function AddGroupEvents(props) {
    const [enteredName, setEnteredName] = useState("");

    const handleInputNameChange = (event) => {
        setEnteredName(event.target.value);
    };
    const addEventsGroup = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/eventGroup`, {
            name: enteredName
        }).then(response => {
            console.log(response.data);
            props.addEventsGroup(response.data);

        }).catch(error => {
            console.log("Error adding events group:", error);
        })


    }
    return (
        <form className={styles.mainContainer} onSubmit={addEventsGroup}>
            <label>Numele evenimentului de grup:</label>
            <input
                className={styles.input}
                type="text"
                onChange={handleInputNameChange}
            />
            <button className={styles.buttonStyle}>Salvează</button>
        </form>
    );
}

export default AddGroupEvents;
