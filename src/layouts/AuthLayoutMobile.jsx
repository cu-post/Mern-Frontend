import { Outlet } from 'react-router-dom'
import HeaderMobile from '../paginas/HeaderMobile'
import BannerMobile from '../paginas/BannerMobile'
import DispositivosTitleMobile from '../paginas/DispositivosTitleMobile'

const AuthLayoutMobile = () => {
    return (
        <>
        <div className=''>
            <div className='flex flex-row justify-center gap-[459px] h-[84px] mt-[34px] relative'>
            <HeaderMobile />
            </div>
            <div className=''>
                <div className='flex flex-row justify-center h-[390px]'>
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