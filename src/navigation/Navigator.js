import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Navigator