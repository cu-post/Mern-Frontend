import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Main from './paginas/Main'
import Proyectos from './paginas/Proyectos'

import {AuthProvider} from './context/AuthProvider'
import {ProyectosProvider} from './context/ProyectosProvider'
import {ReferenciaProvider} from './context/ReferenciaProvider'



function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ReferenciaProvider>
          <ProyectosProvider>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Main />} />
                </Route>

                <Route path="/proyectos" element={<RutaProtegida />}>
                    <Route index element={<Proyectos />} />
                </Route>
            </Routes>
          </ProyectosProvider>
        </ReferenciaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
