import React from "react";
import styles from "./Form.module.css";
type Props = {};

export default function Form({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="images/appmobile/logo.png" alt="" />
      </div>
      <div className={styles.title}>
        <h2>Getting Started</h2>
        <p>Create an account to continue!</p>
      </div>
      <div className={styles.formContainer}>
        <form action="">
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="">Sign In</a>
        </p>
      </div>
      <div className={styles.signUpWith}>
        <button className={styles.facebook}>Continute With Facebook</button>
        <button className={styles.google}>Continute With Google</button>
      </div>
    </div>
  );
}
