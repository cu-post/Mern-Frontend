import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalPreviewMobile from '../paginas/ModalPreviewMobile'
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
    <div className='bg-[#373737] hover:bg-[#FF5E59] h-[394.07px] w-[240.17px] gap-1 p-1 rounded-[24.43px] flex justify-center items-center flex-col m-2'>
      <div className='flex justify-end mt-6 mb-[-20px] relative'>
      </div>
      <div className="flex justify-center flex-col h-fit w-fit  mt-5">
        <div className='flex justify-center items-center flex-col'>
        <iframe id={mobiles3.code} onLoad={() => iframeclick()}
        className="absolute" width="190" height="335">
        </iframe>
        <iframe width="180" height="315"
        src={`https://www.youtube.com/embed/${video}`}
        className='mt-6 mb-3 rounded-[24.43px]'
        title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        >
        </iframe>
        </div>      
        <button onClick={() => handleModalMostrarMobile(mobiles3)} className='flex-col items-center flex'>
            <div className='w-fit pr-2 pb-2'>
              <div 
              className='bg-white w-fit px-4 py-1 mb-10 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px]'>
                  {''}Ver codigo: {code}
                  <div className='text-sm'>
                  {''}Bateria: {battery}%
                  </div>
              </div>
            </div>
        </button>   
      </div>         
    </div>    
    <ModalPreviewMobile
    mobiles3={mobiles3}/>
  </>
    
  )
}

export default PreviewReferenciaMobile
