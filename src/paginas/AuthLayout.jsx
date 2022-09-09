import { Outlet } from 'react-router-dom'
import Header from '../paginas/Header'
import Banner from '../paginas/Banner'
import DispositivosTitle from '../paginas/DispositivosTitle'

const AuthLayout = () => {
  return (
    <>
    <div className=''>
        <div className='flex flex-row justify-center gap-[459px] h-[84px] mt-[34px] relative'>
        <Header />
        </div>
        <div>
            <div className='flex flex-row justify-center h-[390px]'>
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