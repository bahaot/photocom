import React from "react";
import styles from "./Rightnav.module.css";

const ItemSaved = ({ imgSrc }) => {
  return (
    <div className={styles.imgSaved}>
      <img src={imgSrc} />
    </div>
  );
};

export default ItemSaved;
