// Componentes de Previsualisación de items User
import PreviewReferenciaMobile from '../components/PreviewReferenciaMobile';
// Componentes de Previsualisación de items Admin
import PreviewReferenciaMobileAdmin from '../components/PreviewReferenciaMobileAdmin';
// Hook de Referencia del Provider
import useReferencia from '../hooks/useReferencia';
// Parametros de identificación en URL
import { useParams } from 'react-router-dom'
// Autenticador de Sesiòn
import useAuth from '../hooks/useAuth'
// Elementos React
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const MainMobileUserAdmin = () => {

  const navigateLogin = useNavigate();  
  
  // KeyEvent
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.keyCode  == "76") {
      navigateLogin("/Login")
    }
  }
  useEffect(() => {
  window.addEventListener('keydown', handleKeyDown)
  // cleanup this component
  return () => {
      window.removeEventListener('keydown', handleKeyDown)
  }
  }, [])
  
  // Autenticador de Sessiòn
  const { auth, cargando } = useAuth();
  if(cargando) return 'Cargando...'

    const { mobiles } = useReferencia()

    const params = useParams();
    const id = params.id

    const mobilefiltrado = mobiles.filter(function(el){
      return (el.referenceId == id)
    })

    return (    
      <>
        {auth.username? 
        ( // Sessiòn Admin
        <>        
          <div className="shadow rounded-lg flex-col w-[1365px] flex sm:grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        justify-center items-center text-[22.8px] text-white">
            {
              mobilefiltrado.map(mobiles => (
                <PreviewReferenciaMobileAdmin
                          key={mobiles.id}
                          mobiles3={mobiles}
                      />
              ))
            }
          </div>
        </>            
          )
          :
          ( // Sessiòn User
          
        <div className="shadow rounded-lg flex-col w-[1365px] flex sm:grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        justify-center items-center text-[22.8px] text-white">
           {
             mobilefiltrado.map(mobiles => (
               <PreviewReferenciaMobile
                         key={mobiles.id}
                         mobiles3={mobiles}
                     />
             ))
           }
         </div>           
        )}
      </>
  )
}

export default MainMobileUserAdmin