import React from 'react'
import style from './style.module.css'
import {PlusIcon} from '@heroicons/react/24/outline'
const myStory = () => {
 
     return (
    <>
<div  className={style.cardContainer}>
    <div className={style.card}>
      <PlusIcon  className={style.icon}/>
      <img src="https://images.unsplash.com/photo-1667481020991-31186b791c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""  />
    </div>
    <p>You</p>
    </div>
    </>
  )
}

export default myStory
