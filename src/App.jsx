import React from 'react'
import { useHabitsStore } from './store/store'
const App = () => {
  const { count, increment, decrement ,clearData} = useHabitsStore()
  return (
    <div>
      <p>Hello Increment</p>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={clearData}>Clear</button>
    </div>
  )
}

export default App