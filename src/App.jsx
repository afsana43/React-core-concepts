import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Counter from './Counter'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <Person></Person>
      <PersonStyle></PersonStyle>
      <Device name="laptop"></Device>
      <NewDevice></NewDevice>
      {/* another file theke */}
      <Todo task="Learn react" isDone={false}></Todo>

      <Counter></Counter> 

      <Users></Users>
    </>
  )
}

function Person (){
  const name = 'kharapManus';
  const age = 26
  return (
    <>
    <h3>My man  name : { name}</h3>
    <h3>My man  age : {age}</h3>

    </>
  ) 
}
function PersonStyle (){
  const name = 'kharapManus';
  const age = 26

// css style in jsx
  const NewStyle = {
    border : '2px solid red',
    borderRadious : '10px'
  }

  return (
    <>
    <h3 style={NewStyle}>My man  name : { name}</h3>
    <h3>My man  age : {age}</h3>

    </>
  ) 
}

//  propertys : props
// not the right system
function Device (props){
  // console.log(props);
  // normal function handle
  function handleClick(){
    alert('btn clicked');
  }

  // arrow function handle
  const handleClick2 = ()=>{
    alert('btn clicked');
  }
  return(
    <>
    <h2>This a device : {props.name}</h2>

    <button onClick={handleClick}>Click</button>
    <button onClick={handleClick2}>ClickMe</button>

    {/* anonimous arrow function */}
    <button onClick={()=>{alert ('click me more time')}}>ClickMe More</button>
    </>
  )
  
}

// right system

function NewDevice (){
  // console.log(props);
  return(
    <>
    <h2>This a device :</h2>
    </>
  )
}
export default App
