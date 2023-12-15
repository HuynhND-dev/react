import React from "react";
import styles from "./Form03.module.css";
type Props = {};

export default function Form03({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.img}>
          <img src="images/backgrounds/form03.jpg" alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="images/iconExport/form03.png" alt="" />
        </div>

        <div className={styles.form}>
          <h2>Login</h2>
          <h4>Login to your account</h4>
          <p>
            Thank you for get back to Grovia, lets access our the best
            recommendation contact for you.
          </p>
          <hr />
          <form action="">
            <div className="row mt-2">
              <div className="col-md-12">
                <label htmlFor="usernameForm03">Username</label>
                <input
                  type="text"
                  id="usernameForm03"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-12">
                <label htmlFor="passwordForm03">Password</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="row mt-1 mb-4">
              <div className="col-md-6">
                <input
                  type="checkbox"
                  name=""
                  id="rememberForm03"
                  className="form-check-input mt-2"
                />
                <label
                  htmlFor="rememberForm03"
                  className="form-check-label m-1"
                >
                  Remember me
                </label>
              </div>
              <div className="col-md-6 text-end">
                <a href="">Reset password?</a>
              </div>
            </div>
            <div className="row">
              <div className="btn">
                <button className="btn btn-danger col-md-12">Sign in</button>
              </div>
            </div>
            <div className="row">
              <p>
                Don't have an account yet? <a href="">Join Grovia Now!</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
