import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const [index, setIndex] = useState(0);
  const [icons, setIcons] = useState([
    { icon: <HomeIcon className={styles["icon-nav"]} />, isActive: true },
    {
      icon: <ChatBubbleLeftIcon className={styles["icon-nav"]} />,
      isActive: false,
    },
    { icon: <UserIcon className={styles["icon-nav"]} />, isActive: false },
    { icon: <BookmarkIcon className={styles["icon-nav"]} />, isActive: false },
    { icon: <Cog6ToothIcon className={styles["icon-nav"]} />, isActive: false },
  ]);

  const handleActive = (e) => {
    e.preventDefault();

    const clicked = e.target.closest("a");
    const copyOfIcons = [...icons];
    const index = clicked.dataset.index;

    copyOfIcons[index].isActive = true;
    setIcons(copyOfIcons);
    
  };

  return (
    <div className="fixed">
    <div className={styles["nav-main"]}>
      <div className={styles["nav-logo"]}>
        <img src="" alt="logo" />
      </div>

      <nav className={styles["items-nav"]}>
        <ul>
          {icons.map((iconItem, i) => {
            return (
              <li key={`item-${i}`}>
                <a
                  href=""
                  data-index={i}
                  className={`${styles["item-nav"]} ${
                    iconItem.isActive ? styles["item-nav__active"] : ""
                  }`}
                  onClick={handleActive}
                >
                  {iconItem.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default NavBar;
