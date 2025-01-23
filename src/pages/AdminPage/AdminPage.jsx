import React from "react";
import styles from "./AdminPage.module.css";
import EventsTable from "../../components/EventsTable/EventsTable";

function AdminPage() {
  return (
    <div className={styles.adminPageBox}>
      
      <EventsTable />
    </div>
  );
}

export default AdminPage;
