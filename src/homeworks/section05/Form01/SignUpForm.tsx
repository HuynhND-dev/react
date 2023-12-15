import React from "react";
import styles from "./Form01.module.css";
import { BiChevronLeft } from "react-icons/bi";
type Props = {};

export default function SignUpForm({}: Props) {
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
        <h2>Sign up</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.info}>
            <div>
              Looks like you dont have an account. Let's create a new account
              for
            </div>
            <div className={styles.emailInfo}>jane.doe@gmail.com</div>
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
            <div className={styles.formFooter}>
              <span>By selecting Agree and continue below, lagree to </span>
              <a href="">Terms of Service and Privacy Policy</a>
            </div>
            <button>Agree and continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}
