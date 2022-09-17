import useReferencia from '../hooks/useReferencia';
import {useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const HeaderMobileAdmin = () => {
  const navigate1 = useNavigate();

  const [ busqueda, setBusqueda ] = useState('')
  const { mobiles } = useReferencia()
  const params = useParams();
  const id = params.id

  const { cerrarSesionAuth } = useAuth()

  const handleCerrarSesion = () => {
    if(confirm('¿Deseas Salir?')) {
      cerrarSesionAuth()
      localStorage.removeItem('token')
    } 
  }

  const referenceIdd = mobiles.filter(x => x.referenceId == params.id)
  
  const usuariosFiltrados1 = busqueda === '' ? [] : referenceIdd.filter(ref => ref.code.toString().includes(busqueda.toLowerCase()))

  return (
    <>
    <div className="flex justify-center items-center flex-row gap-[5px] lg:ml-44 xl:ml-0 lg:w-1/4 xl:w-1/5 h-[59.34px] mt-[2.84px]">
      <img src="/Capa 2.png" className="lg:ml-28 xl:ml-30 2xl:ml-0 w-[59.81px] h-[38.32px] sm:w-[89.81px] sm:h-[51.32px] mt-[0.84px]" alt="..." />
      <div  onClick={() => navigate1("/perfil")}
      className="text-[30px] md:text-[35px] lg:text-[43.58px] flex-shrink-0 font-semibold text-[#481373] hover:cursor-pointer">Celulares Usados</div>
  </div>
    <div className="flex flex-col justify-center items-center md:justify-between md:flex-row gap-[5px] w-0/2 h-fit mt-[2.84px]">
          <div className='flex flex-row relative'>
          <button
          onClick={handleCerrarSesion}
          className='p-3 ml-4 lg:ml-0 rounded-[9.56px] h-[57.73584747314453px] w-[57.73584747314453px] bg-[#FF5E59]'
          >
              <img src="/exit_to_app.png" alt="" />
          </button>
          <div className="flex absolute inset-y-0 left-20 md:left-20 lg:left-16 xl:left-16 2xl:left-16 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search"
          className="block pl-10 bg-[#FF5E59] placeholder-white pt-[16.0377px] pb-[16.0377px] gap-[16.04px] border border-gray-300 pr-5
          w-[230px] ml-2 sm:w-[300.13px] lg:w-[350px] xl:w-[470px] 2xl:w-[340px] sm:ml-2 h-[h-[57.73584747314453px]] rounded-[8.01887px] text-white"
          placeholder="Buscar Modelo"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          />          
          {usuariosFiltrados1.length > 0 && (
            <div className="flex-col absolute mt-14 md:mt-0 sm:top-16 ml-20 lg:ml-16">
                {usuariosFiltrados1.map( mobiles => (
                    <a
                        key={mobiles.id}
                        value={mobiles}
                        className="w-1/2 relative"
                        href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}/mobile/${id}/modelo/${mobiles.code}`}
                    >
                      <p className='bg-white rounded-md py-1 px-1 w-fit my-1 gap-1 shadow-lg'>
                        {mobiles.code}
                      </p>
                    </a>
                ))}
            </div>
            )}            
          </div>
      </div>  
    </>
    )
  }


export default HeaderMobileAdmin