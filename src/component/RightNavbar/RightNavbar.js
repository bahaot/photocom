import React from "react";
import NavHeader from "./NavHeader";
import styles from "./Rightnav.module.css";
import ToFollow from "./ToFollow";
import SavedItems from "./SavedItems";

const RightNavbar = (props) => {
  return (
    <div className={styles.fixed}>
      <div className={styles.RightNavbar}>
        <NavHeader />
        <ToFollow />
        <SavedItems />
      </div>
    </div>
  );
};

export default RightNavbar;
