import React from "react";
import styles from "./Rightnav.module.css";

const Title = ({ name }) => {
  return (
    <div className={styles.title}>
      <div>{name}</div>
      <a>See all</a>
    </div>
  );
};

export default Title;
