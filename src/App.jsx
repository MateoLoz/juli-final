import { useEffect, useState } from 'react'
import './App.css'
import CrudApp from './components/CrudApp'
;
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';

function App() {

  return (
 <BrowserRouter>
  <Routes>
  <Route path='/' element={<CrudApp/>}></Route>
  <Route path='/create' element={<CrudApp/>}></Route>
  <Route path='/update' element={<CrudApp/>}></Route>
  <Route path='/serch' element={<CrudApp/>}></Route>
  <Route path='/Pago' element={<CrudApp/>}></Route>
  <Route path='/Inpago' element={<CrudApp/>}></Route>
  <Route path='/bono-mensual-basico' element={<CrudApp/>}></Route>
  <Route path='/bono-mensual-medium' element={<CrudApp/>}></Route>
  <Route path='/bono-bicho-feo' element={<CrudApp/>}></Route>
  <Route path='/bono-semanal' element={<CrudApp/>}></Route>
  <Route path='/bono-diario' element={<CrudApp/>}></Route>
  
 </Routes>
 </BrowserRouter>
   )
  
}

export default App
