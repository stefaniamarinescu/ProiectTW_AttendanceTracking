import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import styles from "./Login.module.css";

function Login() {
    const [enteredUsername, setenteredUsername] = useState("");
    const [enteredPassword, setenteredPassword] = useState("");
    const cookies = new Cookies();
    const navigate = useNavigate();


    const usernameChangeHandler = (event) => {
        setenteredUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setenteredPassword(event.target.value);
    };

    const loginHandler = async (e) => {
        e.preventDefault();

        axios
            .get(
                `http://localhost:8080/api/users/loginUser/${enteredUsername}/${enteredPassword}`
            )
            .then((res) => {
                if (res.data !== "DoesntExist") {
                    cookies.set(
                        "user",
                        {
                            ...res.data,
                        },
                        { path: "/", secure: true }
                    );
                    if (res.data.userType === 'Admin') {
                        navigate("/AdminPage");
                    }
                    else {
                        navigate("/StudentPage");
                    }
                } else {
                    navigate("/");
                    alert("Incorrect data entered!");
                }
            })
            .catch((err) => {
                console.error("Error check login:", err);
            });
    };

    return (
        <div className={styles.login}>
            <form onSubmit={loginHandler}>
                <div className={styles.control}>
                    <label>Nume utilizator</label>
                    <input
                        type="text"
                        autoComplete="username"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                </div>
                <div className={styles.control}>
                    <label>Parolă</label>
                    <input
                        type="password"
                        autoComplete="current-password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <button className={styles.btn}>Conectare</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
