// Elementos React
import { Outlet } from 'react-router-dom'
// Autenticador de Sesiòn
import useAuth from '../hooks/useAuth'
// Elementos AuthLayoutUser
import Header from '../paginas/Header'
import Banner from '../paginas/Banner'
import DispositivosTitle from '../paginas/DispositivosTitle'
// Elementos AuthLayouAdmin
import HeaderAdmin from '../paginas/HeaderAdmin'
import BannerAdmin from '../paginas/BannerAdmin'
import DispositivosTitleAdmin from '../paginas//DispositivosTitleAdmin'
import ModalAñadirReferencia from '../Modals/ModalAñadirReferencia'
// Hook de Referencia del Provider
import useReferencia from '../hooks/useReferencia'

const AuthLayoutUserAdminReferencias = () => {
    // Modal de Añadir referencia UserAdmin
    const { HandleAñadirReferencia } = useReferencia()
    // Autenticador de Sessiòn
    const { auth, cargando } = useAuth();
    if(cargando) return 'Cargando...'
    //Body
  return (
    <>{auth.username? 
        ( // Sessiòn Admin
        <><div>
            <div className=''>
                <div className='flex flex-col md:flex-row justify-center lg:gap-[459px] hlg:-[84px] lg:mt-[34px] relative'>
                <HeaderAdmin />
                </div>
                <div className=''>
                    <div className='invisible lg:visible absolute lg:static flex lg:flex-row lg:justify-center lg:h-[390px] mt-5'>
                        <BannerAdmin />                
                    </div>
                    <div className='flex flex-row justify-center h-fit'>
                        <DispositivosTitleAdmin />                
                    </div>
                    <main className='flex flex-row justify-center'>
                        <Outlet /> 
                    </main>
                </div>                    
            </div>
            <button
            className='bottom-0 right-0 fixed md:w-[334px] md:h-[81px] mb-[58px] mr-[41px] bg-white justify-center flex flex-row align-middle shadow-black shadow-lg 
                        rounded-[30px] items-center text-[26.2723px] text-[#8F00FF] font-bold p-2 md:p-0'
                        onClick={HandleAñadirReferencia}>
                        <div className='w-[36px] h-[36px] items-center flex'>
                            <img 
                            className='items center flex justify-center w-[21px] h-[21px]'
                            src="../add.png" alt="" />
                        </div>    
                        <div>
                            Añadir Referencia
                        </div>
            </button>
            <ModalAñadirReferencia/>
        </div>
            
        </>            
        )
        :
        ( // Sessiòn User
        <div className=''>
            <div className='flex flex-col md:flex-row justify-center lg:gap-[459px] hlg:-[84px] lg:mt-[34px] relative'>
            <Header />
            </div>
            <div>
                <div className='invisible lg:visible absolute lg:static flex lg:flex-row lg:justify-center lg:h-[390px] mt-5'>
                    <Banner />                
                </div>
                <div className='flex flex-row justify-center h-fit'>
                    <DispositivosTitle />                
                </div>
                <main className='flex flex-row justify-center'>
                    <Outlet /> 
                </main>
            </div>            
        </div>
        )}    
    </>
  )
}

export default AuthLayoutUserAdminReferencias