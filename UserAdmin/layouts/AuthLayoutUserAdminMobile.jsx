// Elementos React
import { Outlet } from 'react-router-dom'
// Autenticador de Sesiòn
import useAuth from '../hooks/useAuth'
// Elementos AuthLayoutUserMobile
import HeaderMobile from '../paginas/HeaderMobile'
import BannerMobile from '../paginas/BannerMobile'
import DispositivosTitleMobile from '../paginas/DispositivosTitleMobile'
// Elementos AuthLayouAdminMobile
import HeaderMobileAdmin from '../paginas/HeaderMobileAdmin'
import DispositivosTitleMobileAdmin from '../paginas/DispositivosTitleMobileAdmin'
import ModalAñadirReferenciaMobile from '../Modals/ModalAñadirReferenciaMobile'
// Hook de Referencia del Provider
import useReferencia from '../hooks/useReferencia'

const AuthLayouUserAdmintMobile = () => {
    // Modal de Añadir Mobile UserAdmin
    const { HandleAñadirReferenciaMobile } = useReferencia()
    // Autenticador de Sessiòn
    const { auth, cargando } = useAuth();
    if(cargando) return 'Cargando...'
    //Body
    return (
        <>{auth.username? 
            ( // Sessiòn Admin
            <>
                <div className=''>
                <div className='flex flex-col md:flex-row justify-center lg:gap-[459px] hlg:-[84px] lg:mt-[34px] relative'>
                <HeaderMobileAdmin />
                </div>
                <div className=''>
                    <div className='invisible lg:visible absolute lg:static flex lg:flex-row lg:justify-center lg:h-[390px] mt-5'>
                        <BannerMobile />                
                    </div>
                    <div className='flex flex-row justify-center h-fit'>
                        <DispositivosTitleMobileAdmin />                
                    </div>
                    <main className='flex flex-row justify-center'>
                        <Outlet /> 
                    </main>
                </div>                
            </div>            
            ) : 
            <button className='bottom-0 right-0 fixed md:w-[334px] md:h-[81px] mb-[58px] mr-[41px] bg-white justify-center flex flex-row align-middle shadow-black shadow-lg rounded-[30px] items-center
                        text-[26.2723px] text-[#8F00FF] font-bold p-2 md:p-0'
                        onClick={HandleAñadirReferenciaMobile}>
                        <div className='w-[36px] h-[36px] items-center flex'>
                            <img 
                            className='items center flex justify-center w-[21px] h-[21px]'
                            src="/add.png" alt="" />
                        </div>    
                        <div>
                            Añadir Mobile
                        </div>
                </button>
                <ModalAñadirReferenciaMobile/>
            </>            
        )
        :
        ( // Sessiòn User
        <div className=''>
            <div className='flex flex-col md:flex-row justify-center lg:gap-[459px] lg:h-[84px] lg:mt-[34px] relative'>
            <HeaderMobile />
            </div>
            <div className=''>
                <div className='invisible lg:visible absolute lg:static flex lg:flex-row lg:justify-center lg:h-[390px] mt-5'>
                    <BannerMobile />                
                </div>
                <div className='flex flex-row justify-center h-fit'>
                    <DispositivosTitleMobile />                
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

export default AuthLayouUserAdmintMobile