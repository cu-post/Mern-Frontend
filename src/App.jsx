import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import Main from './paginas/Main'
import Proyectos from './paginas/Proyectos'
import NuevoProyecto from './paginas/NuevoProyecto'
import Proyecto from './paginas/Proyecto'
import EditarProyecto from './paginas/EditarProyecto'
import NuevoColaborador from './paginas/NuevoColaborador'

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
                    <Route path="crear-proyecto" element={<NuevoProyecto />} />
                    <Route path="nuevo-colaborador/:id" element={<NuevoColaborador />} />
                    <Route path=":id" element={<Proyecto />} />
                    <Route path="editar/:id" element={<EditarProyecto />} />
                </Route>
            </Routes>
          </ProyectosProvider>
        </ReferenciaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
