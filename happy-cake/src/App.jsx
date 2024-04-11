import Menu from './components/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio, Contacto, NotFound } from './layouts'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
