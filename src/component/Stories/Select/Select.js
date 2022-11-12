import React from 'react'
import style from './style.module.css'
import {EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline'

const Select = () => {
  return (
    <>
    <div  className={style.cardContainer}>
        <div className={style.card}>
          
          <EllipsisHorizontalCircleIcon className={style.icon}/>
        </div>
        <p>See all</p>
        </div>
        </>
  )
}

export default Select
