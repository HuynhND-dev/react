import React from "react";
import styles from "./Form01.module.css";
import { BiChevronLeft } from "react-icons/bi";
type Props = {};

export default function LogInForm({}: Props) {
  const [viewPassword, setViewPassword] = React.useState("password");
  const viewPasswordHandle = () => {
    // console.log(viewPassword);
    if (viewPassword === "password") {
      setViewPassword((x) => "text");
    } else {
      setViewPassword((x) => "password");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.btnBack}>
        <BiChevronLeft size={40} />
      </div>
      <div className={styles.title}>
        <h2>Log in</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.account}>
            <div className={styles.avatar}>
              <img src="images/avatars/bray.png" alt="" />
            </div>
            <div className={styles.acountInfo}>
              <div className={styles.name}>Bray</div>
              <div className={styles.email}>Bray@singer.com</div>
            </div>
          </div>
          <form action="" className={styles.formInput}>
            <div className={styles.formControl}>
              <input type="email" placeholder="" />
              <label className={styles.labelInline}>Email</label>
            </div>
            <div className={styles.formControl}>
              <input type={viewPassword} id="" placeholder="" />
              <label className={styles.labelInline}>Password</label>
              <span onClick={viewPasswordHandle}>view</span>
            </div>
            <button>Agree and continue</button>
          </form>
        </div>
        <div className={styles.formFooter}>
          <a href="">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}
