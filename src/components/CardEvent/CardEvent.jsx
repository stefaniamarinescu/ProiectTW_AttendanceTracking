import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./CardEvent.module.css";
import EventsFromEventGroup from "../EventsFromEventGroup/EventsFromEventGroup";

function CardEvent(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [deleteButton, setDeleteButton] = useState(true);

    const openPopupHandler = () => {
        setIsPopupOpen(true);
    };
    const closePopupHandler = () => {
        setIsPopupOpen(false);
    };
    const deleteEventGroup = () => {
        setDeleteButton(false);
        axios
            .delete(`http://localhost:8080/api/eventGroup/${props.event.id}`)
            .then((response => console.log(response)))
            .catch((error) => {
                console.log("Eroare ștergere eveniment de grup:", error);
            });

        props.deleteEvent(props.event);
    };

    return (
        <>
            <div className={styles.transactionBox} onClick={openPopupHandler}>
                <p className={styles.numeEvent}>{props.event.name}</p>
                <button onClick={deleteEventGroup}>Șterge</button>
            </div>
            {isPopupOpen && deleteButton && (
                <div className={styles.popupContainer}>
                    <div className={styles.modal}>
                        <div className={styles.box}>
                            <p>{props.event.name}</p>
                            <div className={styles.closeIcon}>
                                <FontAwesomeIcon
                                    className={styles.iconStyle}
                                    icon={faXmark}
                                    onClick={closePopupHandler}
                                />
                            </div>
                        </div>
                        <div className={styles.eventsContainer}>
                            <EventsFromEventGroup eventGroup={props.event} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardEvent;
