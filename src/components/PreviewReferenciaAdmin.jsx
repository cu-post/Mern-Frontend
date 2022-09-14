import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalEditarMobile from '../paginasAdmin/ModalEditarMobile'

const PreviewReferenciaAdmin = ({reff}) => {

  const { handleModalEditarMobile } = useReferencia()

  const { reference, img, id, agotado } = reff

  return (
  <>
    <div className=' bg-[#373737] hover:bg-[#FF5E59] h-[394.07px] w-[240.17px] gap-1 p-2 rounded-[24.43px] m-1'>
      <div className='flex justify-end mr-4 mt-2'>
        <button 
        onClick={() => handleModalEditarMobile(reff)}
        className='flex text-sm'>
          Editar
        </button>
      </div>    
      <a href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}/mobileAdmin/${id}`}
      className=''>
        <div className='flex items-center flex-col'>
          <img 
          className='h-[221.46px] w-fit p-4 rounded-[24.43px]'
          src={img} alt="" />
        </div>
        <div className='flex flex-col  '>
            {reference}
          <div className='w-fit pl-4 pr-4 pb-4 flex items-baseline place-items-end'>
            <div>            
              Ref: {id} {' '}
            </div>
            <div
              className={`${!agotado ? 'bg-white bottom-0 ' : 'bg-white text-black'} ml-3 gap-[10.65px] p-[10.65px] mt-[10px] w-fit px-4 py-3 text-[#8F00FF] uppercase font-bold text-[14.9167px] rounded-[22.38px]`}
              >{!agotado ? 'Disponible' : 'Agotado'}</div>
          </div>
        </div>          
      </a>
    </div>
    <ModalEditarMobile/>
  </>
    
  )
}

export default PreviewReferenciaAdmin