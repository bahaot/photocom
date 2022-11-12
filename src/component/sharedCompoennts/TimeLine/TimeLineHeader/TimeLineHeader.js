import React from 'react'
import './style.css'

export default function TimeLineHeader() {
  return (
    <>
      <div className='TimeLineHeader'>
          <div className='TimeLineTitle'>
               <h2>Timeline</h2>
          </div>
          <div className='TimeLineList'>
                 <button>All</button>
                 <button>Following</button>
                 <button>Newest</button>
                 <button>Populer</button>
          </div>
      </div>
      </>
  )
}
