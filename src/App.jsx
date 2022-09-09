import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AuthLayout from './layouts/Authlayout'
import AuthLayoutAdmin from './layouts/AuthLayoutAdmin'

import AuthLayoutMobile from './layouts/AuthLayoutMobile'
import AuthLayoutMobileAdmin from './layouts/AuthLayoutMobileAdmin'
import Main from './paginas/Main'
import MainMobile from './paginasAdmin/MainMobile'
import FormPreviewMobile from './paginas/FormPreviewMobile'
import FormPreviewMobileAdmin from './paginasAdmin/FormPreviewMobileAdmin'
import MainAdmin from './paginasAdmin/MainAdmin'

import Login from './paginas/Login'

import { AuthProvider } from './context/AuthProvider'
import { ReferenciaProvider } from './context/ReferenciaProvider'

function App() {
  return (
    <div className='App'>        
      <BrowserRouter>
        <AuthProvider>  
          <ReferenciaProvider>
            <Routes>

              <Route path="/login" element={<Login />}>
              </Route>

              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Main />} />
              </Route>

              <Route path="/mobile/:id" element={<AuthLayoutMobile/>}>
                <Route index element={<MainMobile />} />            
                <Route path="modelo/:id" element={<FormPreviewMobile />} />
              </Route>

              <Route path="/perfil" element={<AuthLayoutAdmin/>}>
                <Route index element={<MainAdmin />} />
                
              </Route>

              <Route path="/mobileAdmin/:id" element={<AuthLayoutMobileAdmin/>}>
                <Route index element={<MainMobile />} />                          
                <Route path="modelo/:id" element={<FormPreviewMobileAdmin />} />
              </Route>

            </Routes>
          </ReferenciaProvider>
        </AuthProvider>  
      </BrowserRouter>
    </div>
  )
}

export default App