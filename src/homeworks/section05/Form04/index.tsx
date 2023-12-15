import React from "react";
import styles from "./Form04.module.css";
import { FaRegAddressCard } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {};

export default function Form04({}: Props) {
  const [viewPassword, setViewPassword] = React.useState("password");
  const viewPasswordHandle = () => {
    console.log(viewPassword);

    if (viewPassword === "password") {
      setViewPassword((x) => "text");
    } else {
      setViewPassword((x) => "password");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.background1}>
        <div className={styles.background2}>
          <div className={styles.left}>
            <div className={styles.nav}>
              <ul>
                <li>Anywhere</li>
                <li>Home</li>
                <li>Join</li>
              </ul>
            </div>

            <div className={styles.form}>
              <p>START FOR FREE</p>
              <h2>Create new account</h2>
              <p>
                Already A Member? <a href="">Log In</a>
              </p>
              <div className={styles.row}>
                <div className={styles.formControl}>
                  <input type="text" className={styles.input} placeholder="" />
                  <label className={styles.labelInline} htmlFor="">
                    First name
                  </label>
                  <div className={styles.icon}>
                    <FaRegAddressCard />
                  </div>
                </div>
                <div className={styles.formControl}>
                  <input type="text" className={styles.input} placeholder="" />
                  <label className={styles.labelInline} htmlFor="">
                    Last name
                  </label>
                  <div className={styles.icon}>
                    <FaRegAddressCard />
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formControl}>
                  <input className={styles.input} type="email" placeholder="" />
                  <label className={styles.labelInline}>Email</label>
                  <div className={styles.icon}>
                    <IoMdMail />
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.formControl}>
                  <input
                    className={styles.input}
                    type={viewPassword}
                    placeholder=""
                  />
                  <label className={styles.labelInline}>Password</label>
                  <div className={styles.icon} onClick={viewPasswordHandle}>
                    {viewPassword === "password" ? (
                      <AiFillEyeInvisible />
                    ) : (
                      <AiFillEye />
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <button className={styles.btnSecondary}>Change method</button>
                <button className={styles.btnPrimary}>Create Account</button>
              </div>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
}
