import React from 'react'
import {useDispatch} from "react-redux";

const Home = () => {
const value=20;
const dispatch=useDispatch();

const addBtn=()=>{
dispatch({
    type:"increment",
})
}
const subBtn=()=>{
dispatch({
    type:"decrement"
})

}

  return (
    <div>
      <h2>{value}</h2>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home
