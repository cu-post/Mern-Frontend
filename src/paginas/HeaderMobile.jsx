import useReferencia from '../hooks/useReferencia';
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const HeaderAdmin = () => {

  const [ busqueda, setBusqueda ] = useState('')
  const { mobiles } = useReferencia()
  const params = useParams();
  const id = params.id

  const referenceIdd = mobiles.filter(x => x.referenceId == params.id)

  const usuariosFiltrados1 = busqueda === '' ? [] : referenceIdd.filter(ref => ref.code.toString().includes(busqueda.toLowerCase()))

  return (
    <>
      <div className="flex justify-center items-center flex-row gap-[5px] lg:ml-44 xl:ml-0 lg:w-1/4 xl:w-1/5 h-[59.34px] mt-[2.84px]">
        <img src="/Capa 2.png" className="lg:ml-28 xl:ml-30 2xl:ml-0 w-[59.81px] h-[38.32px] sm:w-[89.81px] sm:h-[51.32px] mt-[0.84px]" alt="..." />
        <div className="text-[30px] md:text-[35px] lg:text-[43.58px] flex-shrink-0 font-semibold text-[#481373]">Celulares Usados</div>
      </div>
      <div className="flex flex-col justify-center items-center md:justify-between md:flex-row gap-[5px] w-0/2 h-fit mt-[2.84px]">
          <div className='flex flex-col relative'>
        <div class="flex absolute inset-y-0 left-0 md:left-2 lg:left-0 xl:left-20 2xl:left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search"
        class="block pl-10 gap-[16.04px]  bg-[#FF5E59] rounded-[8.01887px] border border-gray-300 focus:ring-[#481373]
         focus:border-[#481373] placeholder-white dark:border-white text-white
         w-[300px] sm:w-[396.13px] lg:w-[420px] xl:w-[470px] 2xl:w-[340px] sm:ml-2 lg:ml-0 xl:ml-20 2xl:ml-0 h-[59.08px] pt-[16.0377px] pb-[16.0377px] pr-5"
        placeholder="Buscar Modelo" required=""        
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
        />
          {usuariosFiltrados1 .length > 0 && (
            <div className="flex-col absolute mt-14 md:mt-0 sm:top-16">
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


export default HeaderAdmin