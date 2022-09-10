import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'
//Pagina Principal Usuario
import Main from './paginas/Main'
// Login Secreto Admin
import Login from './paginas/Login'

import Proyectos from './paginas/Proyectos'

import {AuthProvider} from './context/AuthProvider'
import {ReferenciaProvider} from './context/ReferenciaProvider'



function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ReferenciaProvider>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Main />} />
                </Route>

                <Route path="/login" element={<Login />}>
                </Route>

                <Route path="/proyectos" element={<RutaProtegida />}>
                    <Route index element={<Proyectos />} />
                </Route>
            </Routes>
        </ReferenciaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
