// Componentes de Previsualisación de items User
import PreviewReferencia from '../components/PreviewReferencia';
// Componentes de Previsualisación de items Admin
import PreviewReferenciaAdmin from '../components/PreviewReferenciaAdmin';
// Autenticador de Sesiòn
import useAuth from '../hooks/useAuth';
// Hook de Referencia del Provider
import useReferencia from '../hooks/useReferencia'
// Elementos React
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const MainUserAdmin = () => {

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

    const { ref } = useReferencia()

    return (      
      <>
        {auth.username? 
        ( // Sessiòn Admin
        <>
          <div className="shadow rounded-lg flex-col flex items-center w-[1365px] sm:grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          text-[22.8px] text-white">
            {
              ref.map((refx, index) => (
                <PreviewReferenciaAdmin 
                          key={index}
                          reff={refx}
                      />
              ))
            }
          </div>  
        </>            
          )
          :
          ( // Sessiòn User
          <div className="shadow rounded-lg flex-col flex items-center w-[1365px] sm:grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            text-[22.8px] text-white">
            {
              ref.map((reff, index) => (
                <PreviewReferencia 
                          key={index}
                          reff={reff}
                      />
              ))
            }
          </div>              
        )}
      </>
    )
    }

export default MainUserAdmin