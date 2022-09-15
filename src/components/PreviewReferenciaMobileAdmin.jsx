import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalPreviewMobile from '../paginas/ModalPreviewMobile'
import ModalEditarMobileAdmin from '../paginasAdmin/ModalEditarMobileAdmin'
import { useEffect } from 'react'

const PreviewReferenciaMobileAdmin = ({mobiles3}) => {

  const { handleModalMostrarMobile, handleModalEditarMobileadmin } = useReferencia()

    // Iframe Body Onclick
useEffect(() => {
  const iframeclick = async () => {
    const bodyt = await document.getElementById(mobiles3.code).contentWindow.document.body
    bodyt.onclick = () => handleModalMostrarMobile(mobiles3)
      }
    iframeclick()
}, [])  


  return (
  <>
    <div className='bg-[#373737] hover:bg-[#FF5E59] h-[420.07px] w-[240.17px] gap-1 p-1 rounded-[24.43px] justify-center flex flex-col m-2'>
      <div className='flex justify-end mt-6 mr-1 mb-[-20px] relative'>
        <button 
        onClick={() => handleModalEditarMobileadmin(mobiles3)}
        className='bg-white w-fit p-1 px-4 mt-4 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px] items-center justify-center flex'>
          Editar
        </button>
      </div>
      <div className='items-center justify-center flex'>
        <div className="flex justify-center flex-col h-fit w-fit">
          <div className='flex justify-center items-center flex-col'>
          <iframe id={mobiles3.code} onLoad={() => iframeclick()}
          className="absolute" width="190" height="335">
          </iframe>
          <iframe width="180" height="315"
          src={`https://www.youtube.com/embed/${mobiles3.video}`}
          className='mt-6 mb-3 rounded-[24.43px]'
          title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          >
          </iframe>
          </div>     
          <button onClick={() => handleModalMostrarMobile(mobiles3)} className='flex-col items-center flex'>
            <div className='w-fit pr-2 pb-2'>
              <div 
              className='bg-white w-fit px-4 py-1 mb-10 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px]'>
                  {''}código: {mobiles3.code}
                  <div className='text-sm'>
                  {''}Bateria: {mobiles3.battery}%
                  </div>
              </div>
            </div>
          </button>   
        </div>         
      </div>
      
    </div>    
    <ModalPreviewMobile
    mobiles3={mobiles3}/>
    <ModalEditarMobileAdmin
    mobiles3={mobiles3}/>
  </>
    
  )
}

export default PreviewReferenciaMobileAdmin
