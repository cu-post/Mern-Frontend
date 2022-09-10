import { Outlet } from 'react-router-dom'
import Header from '../paginas/Header'
import Banner from '../paginas/Banner'
import DispositivosTitle from '../paginas/DispositivosTitle'

const AuthLayout = () => {
  return (
    <>
    <div className=''>
        <div className='flex flex-col md:flex-row justify-center lg:gap-[459px] hlg:-[84px] lg:mt-[34px] absolute'>
        <Header />
        </div>
        <div>
            <div className='invisible lg:visible lg:fixed flex lg:flex-row lg:justify-center lg:h-[390px]'>
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
    </>
  )
}

export default AuthLayout