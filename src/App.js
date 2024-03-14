// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import moon from './component/image/moon.jpg'

function App() {

  let [count,setCount] = useState(1)
  let [visible,setvisible] = useState(true)
  console.log(count)


  function increaseCounter(){
    count++
    setCount(count)
  }

  function decreaseCounter(){
    count--
    setCount(count)
  }


  function show(){
    setvisible(true)
  }

  function hide(){
    setvisible(false)
  }

  return (
    <div className="App">
           <h1>{count}</h1>
           <button onClick = {increaseCounter}>increase</button>
           <button onClick = {decreaseCounter}>Decrease</button> <br /> <br />


           {(visible==true)?<img src ={moon} width={350}/>:<h1>image is hide now</h1>} <br />
           <button onClick={show}>show</button>
           <button onClick={hide}>Hide</button>
           

    </div>
  );
}

export default App;
