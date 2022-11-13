import React from "react";
import TimeLine from "../sharedCompoennts/TimeLine/TimeLine";
import Stories from "../Stories/Stories";
import styles from './MainPage.module.css'

const MainPage = ({stories, data}) => {
  return (
    <div className={styles['main-page__container']}>
      <Stories stories={stories} />
      <TimeLine data={data} />
    </div>
  );
};

export default MainPage;
