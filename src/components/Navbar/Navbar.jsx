import React from "react";
import styles from "./Navbar.module.css";
import NavbarNavigation from "./NavbarNavigation";

function Navbar() {
    return (
        <div className={styles.layout}>
            <h1 className={styles.title}>Monitorizare prezență</h1>
            <NavbarNavigation />
        </div>
    );
}

export default Navbar;
