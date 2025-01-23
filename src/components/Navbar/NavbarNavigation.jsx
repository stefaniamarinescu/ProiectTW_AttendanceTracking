import React from "react";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./NavbarNavigation.module.css";

function NavbarNavigation() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  let userCookie = cookies.get("user");


  const logoutHandler = (e) => {
    e.preventDefault();
    navigate("/");
    const logout = "DoesntExist";
    cookies.set(
      "user",
      {
        logout,
      },
      { path: "/", secure: true }
    );
  };
  return (
    <nav className={styles.nav}>
      <ul>
        {true && (
          <li>
            {userCookie !== undefined ? (
              userCookie.logout !== "DoesntExist" ? (
                <Link to={"/"}>
                  <button onClick={logoutHandler}>Delogare</button>
                </Link>
              ) : null
            ) : null}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavbarNavigation;
