import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./EventsFromEventGroup.module.css";
import AddEvent from "../AddEvent/AddEvent";
import CardEvent2 from "../CardEvent2/CardEvent2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EventsFromEventGroup(props) {
  const [isaddEventOpen, setIsaddEventOpen] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/event`)
      .then((res) => {
        const events = res.data;
        const selectedEvents = events.filter(
          (ev) => ev.EventGroupId == props.eventGroup.id
        );
        setEvents([...selectedEvents]);
      })
      .catch((err) => {
        console.log("Error getEventGroups!", err);
      });
  }, []);

  const openEventHandler = () => {
    setIsaddEventOpen(!isaddEventOpen);
  };

  const addEventHandler = (inputs) => {
    console.log("Verifică aici!!");
    console.log(inputs);
    setEvents((prevEvents) => [...prevEvents, inputs]);
  };

  const deleteEventHandler = (event) => {
    setEvents(events.filter((ev) => ev.id !== event.id));
  };
  return (
    <div className={styles.mainContainer}>
      <ToastContainer toastClassName={styles.customToast} />

      <div className={styles.button}>
        {/* onClick={addHandler} */}
        <button className={styles.buttonStyle} onClick={openEventHandler}>
          Adaugă
        </button>
      </div>
      {isaddEventOpen === true ? (
        <AddEvent addEvent={addEventHandler} eventGroup={props.eventGroup} />
      ) : null}
      <div className={styles.eventsBox}>
        {events.length !== 0 ? (
          events.map((event, index) => (
            <CardEvent2
              key={index}
              eventInputs={event}
              deleteEvent={deleteEventHandler}
            />
          ))
        ) : (
          <p className={styles.paragraph}>Fără tranzacții</p>
        )}
      </div>
    </div>
  );
}

export default EventsFromEventGroup;
