import React from 'react'
import {FaTrash} from 'react-icons/fa'

export default function Robot({robot, onDelete}) {
 return (
    <>
        <img src={robot.avatar_url}/>
        <p>{robot.name}</p>
        <p>{robot.damage}</p>
        <p>{robot.amor}</p>
        <p>{robot.bot_class}</p>
        <FaTrash  onClick={()=> onDelete(robot.id)}/>
    </>
  )
}
