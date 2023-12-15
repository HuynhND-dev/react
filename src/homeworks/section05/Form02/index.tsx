import React from "react";
import styles from "./Form02.module.css";
type Props = {};

export default function Form02({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p>
          <img src="images/iconExport/display.jpg" alt="" />
          Lottery display
        </p>
        <h4>A few clicks away from creating your Lottery Display</h4>
        <img src="images/iconExport/display1.jpg" alt="" />
      </div>
      <div className={styles.content}>
        <h2>Register</h2>
        <h5>Manage all your lottery efficiently</h5>
        <p className="fs-6">
          Let's get you all set up so you can verify your personal account and
          begin setting up your profile.
        </p>
        <form action="">
          <div className="row">
            <div className="col-md-6 mt-2 mb-2">
              <label htmlFor="firstNameForm2" className="form-label fw-bold">
                First Name
              </label>
              <input type="text" className="form-control" id="firstNameForm2" />
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <label htmlFor="lastNameForm2" className="form-label fw-bold">
                Last Name
              </label>
              <input type="text" className="form-control" id="lastNameForm2" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-2 mb-2">
              <label htmlFor="phoneNumberForm2" className="form-label fw-bold">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phoneNumberForm2"
              />
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <label htmlFor="emailForm2" className="form-label fw-bold">
                Email
              </label>
              <input type="email" className="form-control" id="emailForm2" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-2 mb-2">
              <label htmlFor="passwordForm2" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordForm2"
              />
            </div>
            <div className="col-md-6 mt-2 mb-2">
              <label
                htmlFor="confirmPasswordForm2"
                className="form-label fw-bold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPasswordForm2"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12 form-check  m-2">
              <input
                type="checkbox"
                id="checkbox1Form2"
                className="form-check-input"
              />
              <label htmlFor="checkbox1Form2" className="form-check-label">
                Yes, I want to recive Lottery Display emails
              </label>
            </div>
            <div className="col-md-12 form-check m-2">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to all the <a href="">Term</a>, <a href="">Privacy</a>{" "}
                and <a href="">Fees</a>
              </label>
            </div>
          </div>
          <button className="btn btn-primary btn-sm">Creat Account</button>
        </form>
        <p className="mt-3">
          Alredy have account? <a href="">Login</a>
        </p>
      </div>
    </div>
  );
}
