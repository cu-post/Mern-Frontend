import useReferencia from '../hooks/useReferencia';
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const HeaderAdmin = () => {

  const [ busqueda, setBusqueda ] = useState('')
  const { mobiles } = useReferencia()
  const params = useParams();
  const id = params.id

  const usuariosFiltrados1 = busqueda === '' ? [] : mobiles.filter(ref => busqueda == ref.code)

  return (
    <>
      <div className="flex justify-center items-center flex-row gap-[5px] lg:ml-44 xl:ml-0 lg:w-1/4 h-[59.34px] mt-[2.84px]">
        <img src="/Capa 2.png" className="w-[59.81px] h-[38.32px] sm:w-[89.81px] sm:h-[51.32px] mt-[0.84px]" alt="..." />
        <div className=" text-[43.58px] font-semibold text-[#481373]">Phonemania</div>
      </div>
      <div className="flex flex-col justify-center items-center md:justify-between md:flex-row gap-[5px] w-0/2 h-fit mt-[2.84px]">
          <div className='flex flex-col'>
          <input
          className="bg-[#FF5E59] placeholder-white pt-[16.0377px] pb-[16.0377px] pl-[16.0377px] gap-[16.04px]
          w-[300px] sm:w-[396.13px] h-[59.08px] rounded-[8.01887px] text-white"
          placeholder="Codigo"
          type="text"
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