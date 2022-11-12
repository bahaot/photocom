import React from "react";
import styles from "./Rightnav.module.css";

const NavHeader = (Props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.inputPart}>
        <input type="text" placeholder="Search" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className={styles.notification}>
        <i class="fa-regular fa-bell"></i>
      </div>
      <div className={styles.share}>
        <i class="fa-solid fa-share-from-square"></i>
      </div>
    </div>
  );
};
export default NavHeader;
