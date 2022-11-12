import React from 'react'
import style from './style.module.css'
const StoryCard = (props) => {
  const fullName=props?.s?.firstName+' ' ;
  return (
    <>
<div  className={style.cardContainer}>
    <div className={style.card}>
      
      <img src={props?.s?.thumbnail} alt=""  />
    </div>
    <p>{fullName}</p>
    </div>
    </>
    
  )
}

export default StoryCard
