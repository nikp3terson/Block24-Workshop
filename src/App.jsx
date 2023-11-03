import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupID, setFeatPupId] = useState(null);
  // console.log("puppyList: ", puppyList)
  function handleClick() {

  }

  return (
    <div className='App'>
      {
        puppies.map((puppy) => {
          return <p onClick={handleClick} key={puppy.id}>{puppy.name}</p>
        })
      }
    </div>
  )
}

export default App
