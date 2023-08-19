import React from 'react'

const Home = ({value}) => {

  return (
    <div>
      <h2>{value}</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default Home
