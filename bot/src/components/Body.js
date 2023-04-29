import Robot from './Robot'

export default function Body({robots, onDelete}) {
  return (
    <>
        {robots.map((robot) => (
            <Robot key={robot.id} robot = {robot}
            onDelete={onDelete}/>
        ))}  
      </>
  )
}