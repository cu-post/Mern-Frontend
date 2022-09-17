import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalPreviewMobile from '../Modals/ModalPreviewMobile'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PreviewReferenciaMobile = ({mobiles3}) => {

  
  const params = useParams()

  const { handleModalMostrarMobile } = useReferencia()

  // Iframe Body Onclick
  const [id, setId] = useState('')
  const [code, setCode] = useState('')
  const [date, setDate] = useState('')
  const [referenceid, setReferenceid] = useState('')
  const [video, setVideo] = useState('')
  const [battery, setBattery] = useState('')

  useEffect(() => {
      if(params.id ) {
          setId(mobiles3.id)
          setCode(mobiles3.code)
          setDate(mobiles3.date)
          setReferenceid(mobiles3.Referenceid)
          setVideo(mobiles3.video)
          setBattery(mobiles3.battery)
          return
      } 
      setId('')
      setCode('')
      setDate('')
      setReferenceid('')
      setVideo('')
      setBattery('')
      
  }, []);

    // Iframe Body Onclick
    useEffect(() => {
      const iframeclick = async () => {
        const bodyt1 = await document.getElementById(mobiles3.code).contentWindow.document.body
        bodyt1.onclick = () => handleModalMostrarMobile(mobiles3)
          }
        iframeclick()
    }, [])  

  return (
  <>
    <div className=' bg-white hover:bg-[#481373] h-[394.07px] w-[240.17px] rounded-[24.43px] relative border border-black text-black hover:text-white justify-center flex'>
        <div className='flex items-center flex-col mt-8'>
        <iframe id={mobiles3.code} onLoad={() => iframeclick()}
        className="absolute" width="190" height="335">
        </iframe>
        <iframe width="180" height="315"
        src={`https://www.youtube.com/embed/${video}`}
        className='rounded-[24.43px] border-2 border-spacing-3 border-black'
        title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
        </div>      
        <button onClick={() => handleModalMostrarMobile(mobiles3)} className='flex flex-row absolute bottom-0 justify-center w-[210px]'>
            <div className='w-fit justify-center flex'>
              <div 
              className='bg-white w-fit px-4 py-1 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px] absolute bottom-1 border border-black'>
                  {''}Código: {code}
                  <div className='text-sm'>
                  {''}Bateria: {battery}%
                  </div>
              </div>
            </div>
        </button>          
    </div>    
    <ModalPreviewMobile
    mobiles3={mobiles3}/>
  </>
    
  )
}

export default PreviewReferenciaMobile
