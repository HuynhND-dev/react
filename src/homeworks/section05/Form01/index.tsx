import React from "react";
import styles from "./Form01.module.css";
import ButtonIcon from "./BtnIcon";
import { BiChevronLeft } from "react-icons/bi";

type Props = {};

export default function Form01({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.btnBack}>
        <BiChevronLeft size={40} />
      </div>
      <div className={styles.title}>
        <h2>hi!</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.form}>
          <form action="" className={styles.formInput}>
            <div className={styles.formControl}>
              <input type="email" placeholder="" />
              <label className={styles.labelInline}>Email</label>
            </div>
            <button>continute</button>
          </form>
          or
          <div className={styles.loginWith}>
            <ButtonIcon
              icon="images/iconExport/facebook.png"
              text="Continue with Facebook "
            />
            <ButtonIcon
              icon="images/iconExport/google.png"
              text="Continue with Google"
            />
            <ButtonIcon
              icon="images/iconExport/apple.png"
              text="Continue with Apple"
            />
          </div>
        </div>
        <div className={styles.formFooter}>
          <p>
            Don't have an acount? <a href="">Sign up</a>
          </p>
          <a href="">Forgot your pasword?</a>
        </div>
      </div>
    </div>
  );
}
