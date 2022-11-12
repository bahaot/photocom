import TimeLineHeader from './TimeLineHeader/TimeLineHeader'
import TimeLineContent from './TimeLineContent/TimeLineContent'
import './style.css'


import React from 'react'

export default function TimeLine({data}) {
  return (
    <>
    <div className='TimeLine'>
     <TimeLineHeader/>
     <TimeLineContent data={data}/>
     </div>
     </>
  )
}

