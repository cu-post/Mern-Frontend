import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import HeaderAdmin from '../paginasAdmin/HeaderAdmin'
import BannerAdmin from '../paginasAdmin/BannerAdmin'
import DispositivosTitleAdmin from '../paginasAdmin/DispositivosTitleAdmin'
import ModalAñadirReferencia from '../paginasAdmin/ModalAñadirReferencia'
import useReferencia from '../hooks/useReferencia'

const AuthLayoutAdmin = () => {

    const { HandleAñadirReferencia } = useReferencia()

    const { auth, cargando } = useAuth();
    if(cargando) return 'Cargando...'
    return (
        <>{auth.username? 
            (
                <div className=''>
                    <div className='flex flex-col md:flex-row justify-center lg:gap-[459px] hlg:-[84px] lg:mt-[34px] lg:relative'>
                    <HeaderAdmin />
                    </div>
                    <div className=''>
                        <div className='invisible lg:visible absolute lg:relative flex lg:flex-row lg:justify-center lg:h-[390px]'>
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
            ) : <Navigate to="/" />}
            <button className='bottom-0 right-0 fixed w-[334px] h-[81px] mb-[58px] mr-[41px] bg-white justify-center flex flex-row align-middle shadow-black shadow-lg rounded-[30px] items-center
                                text-[26.2723px] text-[#8F00FF] font-bold'
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
        </>
      )
    }

export default AuthLayoutAdmin