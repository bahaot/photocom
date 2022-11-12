import React from "react";
import ItemSaved from "./ItemSaved";
import styles from "./Rightnav.module.css";
import Title from "./Title";

const SavedItems = (props) => {
  const items = [
    "https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg",
    "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
  ];
  return (
    <div>
      <Title name={"You Saved"} />
      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <ItemSaved imgSrc={item} />
        ))}
      </div>
    </div>
  );
};

export default SavedItems;
