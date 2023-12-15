import React from "react";
import styles from "./MountingExample.module.css";
import classNames from "classnames";
type Props = {};

export default function MountingExample({}: Props) {
  const [act, setAct] = React.useState(1);

  return (
    <div className={styles.container}>
      {[1, 2, 3].map((item, index) => {
        const dot = classNames(styles.dot, {
          [styles.active]: item == act,
          [styles.inactive]: item != act,
        });
        return (
          <div
            className={dot}
            onClick={() => {
              setAct(item);
            }}
          ></div>
        );
      })}
    </div>
  );
}
