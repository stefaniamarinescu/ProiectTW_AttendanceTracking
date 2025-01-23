import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./EventsTable.module.css";
import AddGroupEvents from "../AddGroupEvents/AddGroupEvents";
import CardEvent from "../CardEvent/CardEvent";

function EventsTable() {
    const [stateBox, setStateBox] = useState(false);
    const [events, setEvents] = useState([]);


    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/eventGroup`)
            .then((res) => {
                const events = res.data;
                setEvents([...events]);
            })
            .catch((err) => {
                console.log("Error getEventGroups!", err);
            });
    }, []);

    const addHandler = () => {
        setStateBox(!stateBox);
    };

    const addEventsGroupHandler = (newEventGroup) => {
        setEvents((prevEvents) => [...prevEvents, newEventGroup]);
    };

    const deleteEventHandler = (event) => {
        setEvents(events.filter(ev => ev.id !== event.id));
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.button}>
                <button className={styles.buttonStyle} onClick={addHandler}>
                    Adaugă
                </button>
            </div>
            {stateBox === true ? (
                <AddGroupEvents addEventsGroup={addEventsGroupHandler} />
            ) : null}
            <div className={styles.eventsBox}>
                {events.length !== 0 ? (
                    events.map((event, index) => (
                        <CardEvent key={index} event={event} deleteEvent={deleteEventHandler} />
                    ))
                ) : (
                    <p className={styles.paragraph}>Fără tranzacții</p>
                )}
            </div>
        </div>
    );
}

export default EventsTable;
