import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import AuthLayoutMobile from './layouts/AuthLayoutMobile'
import AuthLayoutAdmin from './layouts/AuthLayoutAdmin'
import AuthLayoutMobileAdmin from './layouts/AuthLayoutMobileAdmin'
//Pagina Principal Usuario
import Main from './paginas/Main'
import MainMobile from './paginasAdmin/MainMobile'
import FormPreviewMobile from './paginas/FormPreviewMobile'
// Login Secreto Admin
import Login from './paginas/Login'
import MainAdmin from './paginasAdmin/MainAdmin'
import MainMobileAdmin from './paginasAdmin/MainMobileAdmin'
import FormPreviewMobileAdmin from './paginasAdmin/FormPreviewMobileAdmin'

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

                <Route path="/mobile/:id" element={<AuthLayoutMobile/>}>
                  <Route index element={<MainMobile />} />            
                  <Route path="modelo/:id" element={<FormPreviewMobile />} />
                </Route>

                <Route path="/login" element={<Login />}>
                </Route>

                <Route path="/perfil" element={<AuthLayoutAdmin />}>
                    <Route index element={<MainAdmin />} />
                </Route>

              <Route path="/mobileAdmin/:id" element={<AuthLayoutMobileAdmin/>}>
                <Route index element={<MainMobileAdmin />} />                          
                <Route path="modelo/:id" element={<FormPreviewMobileAdmin />} />
              </Route>

            </Routes>
        </ReferenciaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
