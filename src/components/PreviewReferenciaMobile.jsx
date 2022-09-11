import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalPreviewMobile from '../paginas/ModalPreviewMobile'

const PreviewReferencia = ({mobiles2}) => {

  const { handleModalMostrarMobile } = useReferencia()

  const { referenceid, video, code } = mobiles2

  return (
  <>
    <div className='bg-[#373737] hover:bg-[#FF5E59] h-[394.07px] w-[240.17px] gap-1 p-1 rounded-[24.43px] flex justify-center items-center flex-col m-2'>
      <div className='flex justify-end mt-6 mb-[-20px] relative'>
      </div>
      <div className="flex justify-center flex-col h-fit w-fit  mt-5">
        <div className='flex justify-center items-center flex-col'>
        <iframe className="absolute" width="190" height="335">
        </iframe>
        <iframe width="180" height="315"
        src={video}
        className='mt-6 mb-3 rounded-[24.43px]'
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
        </div>      
        <button onClick={() => handleModalMostrarMobile(mobiles2)} className='flex-col items-center flex'>
          <div className='w-fit pl-4 pr-4 pb-4'>
            {referenceid}
            <div 
            className='bg-white w-fit px-4 py-1 mb-6 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px]'>
                {''}Ver Video {code}
            </div>
          </div>
        </button>   
      </div>         
    </div>    
    <ModalPreviewMobile/>
  </>
    
  )
}

export default PreviewReferencia