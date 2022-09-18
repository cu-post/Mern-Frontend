import PreviewModalReferencia from '../Modals/PreviewModalReferencia'
import ModalEditarMobileAdmin from '../Modals/ModalEditarMobileAdmin'
import { useEffect, useState } from 'react'

const PreviewReferenciaMobileAdmin = ({mobiles3}) => {

  const [showModal, setShowModal] = useState(false);

    // Iframe Body Onclick
    useEffect(() => {
      const iframeclick = async () => {
        const bodyt1 = await document.getElementById(mobiles3.code).contentWindow.document.body
        bodyt1.onclick = () => setShowModal(true)
          }
        iframeclick()
    }, [])  


  return (
  <>
    <div className=' bg-white hover:bg-[#481373] h-[394.07px] w-[240.17px] gap-1 p-2 rounded-[24.43px] m-1 relative border border-black text-black hover:text-white flex flex-col '>
      <div className='flex justify-end relative'>
        <button 
        onClick={() => handleModalEditarMobileadmin(mobiles3)}
        className='bg-white border border-black w-fit px-4 py-1 text-[#8F00FF] uppercase font-bold rounded-[22.38px] text-sm'>
          Editar
        </button>
      </div>
          <div className='flex justify-center items-center flex-colk'>
          <iframe id={mobiles3.code} onLoad={() => iframeclick()}
          className="absolute" width="190" height="335">
          </iframe>
          <iframe width="180" height="315"
          src={`https://www.youtube.com/embed/${mobiles3.video}`}
          className='rounded-[24.43px] border-2 border-spacing-3 border-black'
          title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          >
          </iframe>
          </div>     
          <button onClick={() => handleModalMostrarMobile(mobiles3)} className='flex-col items-center flex'>
            <div className='w-fit justify-center flex'>
              <div 
              className='bg-white w-fit px-4 py-1 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px] absolute bottom-1 border border-black'>
                  {''}Código: {mobiles3.code}
                  <div className='text-sm'>
                  {''}Batería: {mobiles3.battery}%
                  </div>
              </div>
            </div>
          </button>      
    </div>
    {showModal ? (
          <PreviewModalReferencia
          setShowModal={setShowModal}
          mobiles3={mobiles3}/>
      ) : null}
    <ModalEditarMobileAdmin
    mobiles3={mobiles3}/>
  </>
    
  )
}

export default PreviewReferenciaMobileAdmin
