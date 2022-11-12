import React from "react";
import styles from "./Rightnav.module.css";

const ItemFollow = ({ imgSrc, name, userName, following }) => {
  return (
    <div className={styles.ItemFollow}>
      <div className={styles.userInfo}>
        <img src={imgSrc} />
        <div className={styles.text}>
          <p>{name}</p>
          <p>{userName}</p>
        </div>
      </div>
      <button className={following ? styles.followTrue : styles.followFalse}>
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default ItemFollow;
