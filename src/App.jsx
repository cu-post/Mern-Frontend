import { BrowserRouter, Routes, Route } from 'react-router-dom'


//Pagina Home Usuario & Admin
import MainUserAdmin from '../UserAdmin/paginas/MainUserAdmin'
import MainMobileUserAdmin from '../UserAdmin/paginas/MainMobileUserAdmin'
// Login Secreto Admin
import Login from '../UserAdmin/paginas/Login'
// Forms
import FormPreviewMobile from '../UserAdmin/Forms/FormPreviewMobile'

import { AuthProvider } from '../UserAdmin/context/AuthProvider'
import {ReferenciaProvider} from '../UserAdmin/context/ReferenciaProvider'

// New Order
import AuthLayoutUserAdminReferencias from '../UserAdmin/layouts/AuthLayoutUserAdminReferencias'
import AuthLayouUserAdmintMobile from '../UserAdmin/layouts/AuthLayoutUserAdminMobile'

// 
// <Route path="/mobileAdmin/:id" element={<AuthLayoutMobileAdmin/>}>
// <Route index element={<MainMobileAdmin />} />                          
// <Route path="modelo/:id" element={<FormPreviewMobileAdmin />} />
// </Route>


function App() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ReferenciaProvider>
            <Routes>
                <Route path="/login" element={<Login />}>
                </Route>

                <Route path="/" element={<AuthLayoutUserAdminReferencias />}>
                    <Route index element={<MainUserAdmin />} />
                </Route>
                <Route path="/mobile/:id" element={<AuthLayouUserAdmintMobile/>}>
                  <Route index element={<MainMobileUserAdmin />} />            
                  <Route path="modelo/:id" element={<FormPreviewMobile />} />
                </Route>


            </Routes>
        </ReferenciaProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
