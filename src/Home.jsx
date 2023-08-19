import React from 'react'
import {useDispatch,useSelector} from "react-redux";

const Home = () => {

const dispatch=useDispatch();

const {c}=useSelector(state=>state.custom);
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
      <h2>{c}</h2>
      <button onClick={addBtn}>Increment</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  )
}

export default Home
