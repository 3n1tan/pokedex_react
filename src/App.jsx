import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Default from './pages/Default'
import Home from './components/Home'
import PokedexList from './components/PokedexList'
import InfoPoke from './components/InfoPoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />} />
            <Route path="pokemons" element={<PokedexList />} />
            <Route path="pokemons/:aboutpoke" element={<InfoPoke />} />

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
