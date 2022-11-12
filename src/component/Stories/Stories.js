import React from 'react'
import StoryCard from './StoryCard/StoryCard'
import MyStory from './MyStory/MyStory'

import style from './style.module.css'
import Select from './Select/Select'

const Stories = ({stories}) => {
 const ListStories=stories.map(story=><StoryCard s={story} key={story.id}/>)
  return (
    <div className={style.storyContainer}>
    <MyStory />
     {ListStories}
     <Select />
     <div className={style.line}></div>
    </div>
  )
}

export default Stories
