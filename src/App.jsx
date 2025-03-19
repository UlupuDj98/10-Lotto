import React from 'react'
import './App.css'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Homegame from './Component/Homegame'
import Game from './Component/Game'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>


        <Route path='/' element={<Homegame/>}></Route>
        <Route path='/home' element={<Homegame/>}></Route>


        <Route path='/home/game' element={<Game/>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
