import React from 'react'
import TimeLineContentImg from './TimeLineContentImg/TimeLineContentImg'
import './style.css'

export default function TimeLineContent({data}) {


  return (
    <>
    <div className='TimeLineContent'>
        {data.map((item)=> <TimeLineContentImg  TimeLineItem={item} />
        
        )}
      
    </div>
    </>
  )
}
