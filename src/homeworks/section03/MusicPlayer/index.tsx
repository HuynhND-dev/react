import React from "react";
import styles from "./MusicPlayer.module.css";
import ListMusic from "./List";

type Props = {};
export default function MusicPlayer({}: Props) {
  return (
    <div className={styles.container}>
      <ListMusic />
    </div>
  );
}
