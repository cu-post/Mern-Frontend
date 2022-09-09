import useReferencia from '../hooks/useReferencia';
import {useState } from 'react'

const Header = () => {

  const [ busqueda, setBusqueda ] = useState('')
  const { ref } = useReferencia()

  const usuariosFiltrados = busqueda === '' ? [] : ref.filter(ref => ref.reference.toLowerCase().includes(busqueda.toLowerCase()))
  
  return (
  <>
    <div className="flex flex-row gap-[5px] w-1/4 h-[59.34px]  mt-[2.84px]">
        <img src="./Capa 2.png" className="w-[89.81px] h-[51.32px] mt-[0.84px]" alt="..." />
        <div className=" text-[43.58px] font-semibold text-[#481373]">Phonemania</div>
    </div>
    <div className="flex flex-row gap-[5px] w-0/1 h-[59.34px] mt-[2.84px]">
          <div className='flex flex-col'>
          <input
          className="bg-[#FF5E59] placeholder-white pt-[16.0377px] pb-[16.0377px] pl-[16.0377px] gap-[16.04px]
          w-[396.13px] h-[59.08px] rounded-[8.01887px] text-white"
          placeholder="Code?"
          type="text"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          />
          {usuariosFiltrados.length > 0 && (
            <div className="flex-col">
                {usuariosFiltrados.map( ref => (
                    <a
                        key={ref.id}
                        value={ref}
                        className="w-1/2"
                        href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}/mobile/${ref.id}`}
                    >
                      <p className='bg-white rounded-md py-1 px-1 w-fit my-1 gap-1 shadow-lg'>
                        {ref.reference}
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

export default Header