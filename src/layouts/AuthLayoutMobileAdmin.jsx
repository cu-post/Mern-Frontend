import { Outlet, Navigate } from 'react-router-dom'
import HeaderMobileAdmin from '../paginasAdmin/HeaderMobileAdmin'
import BannerMobile from '../paginas/BannerMobile'
import DispositivosTitleMobileAdmin from '../paginasAdmin/DispositivosTitleMobileAdmin'
import useAuth from '../hooks/useAuth'
import ModalAñadirReferenciaMobile from '../paginasAdmin/ModalAñadirReferenciaMobile'
import useReferencia from '../hooks/useReferencia'

const AuthLayoutMobileAdmin = () => {

    const { HandleAñadirReferenciaMobile } = useReferencia()

    const { auth, cargando } = useAuth();
    if(cargando) return 'Cargando...'
    return (
        <>{auth.username? 
            (
                <div className=''>
                    <div className='flex flex-row justify-center gap-[459px] h-[84px] mt-[34px] relative'>
                    <HeaderMobileAdmin />
                    </div>
                    <div className=''>
                        <div className='flex flex-row justify-center h-[390px]'>
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
            ) : <Navigate to="/" />}
            <button className='bottom-0 right-0 fixed w-[334px] h-[81px] mb-[58px] mr-[41px] bg-white justify-center flex flex-row align-middle shadow-black shadow-lg rounded-[30px] items-center
                                text-[26.2723px] text-[#8F00FF] font-bold'
                                onClick={HandleAñadirReferenciaMobile}>
                                <div className='w-[36px] h-[36px] items-center flex'>
                                    <img 
                                    className='items center flex justify-center w-[21px] h-[21px]'
                                    src="../add.png" alt="" />
                                </div>    
                                <div>
                                    Añadir Mobile
                                </div>
            </button>
            <ModalAñadirReferenciaMobile/>
        </>
      )
    }

export default AuthLayoutMobileAdmin