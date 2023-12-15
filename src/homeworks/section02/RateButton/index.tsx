import React from "react";
import styles from "./Ratting.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
type Props = { ratting?: number; size?: number };

export default function Ratting({ ratting = 5, size = 0 }: Props) {
  const [star, setRatting] = React.useState(ratting);
  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <div
            className={styles.ratting}
            key={index}
            onClick={() => {
              setRatting(item);
            }}
          >
            {star >= item ? (
              <AiFillStar color="orange" size={size} />
            ) : (
              <AiOutlineStar color="grey" size={size} />
            )}
          </div>
        );
      })}
    </div>
  );
}
