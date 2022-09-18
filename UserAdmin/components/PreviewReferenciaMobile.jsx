import { useEffect, useState } from 'react'
import PreviewModalReferencia from '../Modals/PreviewModalReferencia'

const PreviewReferenciaMobile = ({mobiles3}) => {
  
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
    <div className=' bg-white hover:bg-[#481373] h-[394.07px] w-[240.17px] rounded-[24.43px] relative border border-black text-black hover:text-white justify-center flex'>
        <div className='flex items-center flex-col mt-8'>
        <iframe id={mobiles3.code}
        onLoad={() => setShowModal(true)}
        className="absolute" width="190" height="335">
        </iframe>
        <iframe width="180" height="315"
        src={`https://www.youtube.com/embed/${mobiles3.video}`}
        className='rounded-[24.43px] border-2 border-spacing-3 border-black'
        title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
        </div>      
        <button 
        onClick={() => setShowModal(true)} className='flex flex-row absolute bottom-0 justify-center w-[210px]'>
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
  </>
    
  )
}

export default PreviewReferenciaMobile
