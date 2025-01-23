import React from "react";
import styles from "./UserPresentItem.module.css";

function UserPresentItem(props) {
  return (
    <div className={styles.tableRow}>
      <div className={styles.tableCell}>{props.user.lastName}</div>
      <div className={styles.tableCell}>{props.user.firstName}</div>
      <div className={styles.tableCell}>{props.user.email}</div>
      <div className={styles.tableCell}>{props.user.phone}</div>
    </div>
  );
}

export default UserPresentItem;
