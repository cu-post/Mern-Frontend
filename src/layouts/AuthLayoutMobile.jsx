import { Outlet } from 'react-router-dom'
import HeaderMobile from '../paginas/HeaderMobile'
import BannerMobile from '../paginas/BannerMobile'
import DispositivosTitleMobile from '../paginas/DispositivosTitleMobile'

const AuthLayoutMobile = () => {
    return (
        <>
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
        </>
      )
    }

export default AuthLayoutMobile