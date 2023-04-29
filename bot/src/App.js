import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
import Body from './components/Body';
import Add from './components/Add'
import SearchBar from './components/SearchBar';


function App() {
  const [robot,setRobot]=useState([])
  const [keyword, setKeyword] = useState('');
  useEffect (()=> {
    const getRobot = async () =>{
      const robotfromserver = await fetchRobot()
      setRobot(robotfromserver)
    }

    getRobot()
  }, [])

  const fetchRobot = async () => {
    const res = await fetch ("http://localhost:3000/bots")
    const data = await res.json()
    setRobot(data)
    console.log(data)
  
    return data

  }

  const addRobot = (robott) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newRobot = {id, ...robott}
    setRobot([...robot, newRobot])
  }

  const updateKeyword = (keyword) => {
    const filtered = robot.filter(robot => {
     return `${robot.name.toLowerCase()}`.includes(keyword.toLowerCase());
    })
    setKeyword(keyword);
    setRobot(filtered);
 }

 //delete robot
const deleteRobot = (id) => {
  setRobot(robot.filter((robot) => robot.id !==id))
}


  return (
    <div className="App">
      <Header/>
      <SearchBar keyword={keyword} onChange ={updateKeyword}/>
      <Body robots={robot} onDelete={deleteRobot}/>
      <Add onAdd={addRobot}/>
    </div>
  );
}

export default App;
