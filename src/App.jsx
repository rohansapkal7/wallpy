import { useState } from 'react'
import './App.css'
import jiraya from './assets/jiraiya.jpg'
import kakashi from './assets/kakashi.jpg'
import naruto from './assets/naruto.jpg'
import gaara from './assets/gaara.jpg'
import shikamaru from './assets/shikamaru.jpg'
import itachi from './assets/itachi.jpg'

function App() {

  const [bg,setBg] = useState(jiraya)

  return (
    <>
      <div className='bg'>
        <img src={bg} alt="bg-image" />
        <div className='btn-holder'>
          <button onClick={()=>setBg(jiraya)}>Jiraiya</button>
          <button onClick={()=>setBg(kakashi)}>Kakashi</button>
          <button onClick={()=>setBg(naruto)}>Naruto</button>
          <button onClick={()=>setBg(gaara)}>Gaara</button>
          <button onClick={()=>setBg(shikamaru)}>Shikamaru</button>
          <button onClick={()=>setBg(itachi)}>Itachi</button>
        </div>
      </div>
    </>
  )
}

export default App
