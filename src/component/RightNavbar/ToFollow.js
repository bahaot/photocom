import React from "react";
import styles from "./Rightnav.module.css";
import ItemFollow from "./ItemFollow";
import Title from "./Title";

const ToFollow = (props) => {
  const people = [
    {
      imgSrc: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
      name: "Khoulod Mohamed",
      userName: "@khmohamed",
      following: true,
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
      name: "Mostafa Mohamed",
      userName: "@mostafa2020",
      following: false,
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
      name: "Nada Ahmed",
      userName: "@nadaahmed",
      following: true,
    },
  ];
  return (
    <div className={styles.ToFollow}>
      <Title name={"People to follow"} />
      <div className={styles.listOfPeople}>
        {people.map((item) => (
          <ItemFollow {...item} />
        ))}
      </div>
    </div>
  );
};

export default ToFollow;
