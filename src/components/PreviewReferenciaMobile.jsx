import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalPreviewMobile from '../paginas/ModalPreviewMobile'
import ModalEditarMobileAdmin from '../paginasAdmin/ModalEditarMobileAdmin'

const PreviewReferencia = ({mobiles2}) => {

  const { handleModalMostrarMobile, handleModalEditarMobileadmin } = useReferencia()

  const { referenceid, video, code } = mobiles2

  return (
  <>
    <div className='bg-[#373737] hover:bg-[#FF5E59] h-[394.07px] w-[262.17px] gap-1 p-1 rounded-[24.43px] justify-center flex flex-col'>
      <div className='flex justify-end mr-4 mt-6 mb-[-20px] relative'>
        <button 
        onClick={() => handleModalEditarMobileadmin(mobiles2)}
        className='text-sm'>
          Editar
        </button>
      </div>
      <div className="flex justify-center flex-col h-fit w-fit ml-8">
        <div className='flex justify-center items-center flex-col'>
        <iframe className="absolute" width="190" height="345">
        </iframe>
        <iframe width="180" height="315"
        src={video}
        className='mt-6 mb-3 rounded-[24.43px]'
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
        </div>      
        <button onClick={() => handleModalMostrarMobile(mobiles2)} className='flex flex-col'>
          <div className='w-fit pl-4 pr-4 pb-4'>
            {referenceid}
            <div 
            className='flex text-sm uppercase'>
                {''}ver Codigo: {code}
            </div>
          </div>
        </button>   
      </div>         
    </div>    
    <ModalPreviewMobile/>
    <ModalEditarMobileAdmin/>
  </>
    
  )
}

export default PreviewReferencia