import React from 'react'
import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FormPreviewMobile = ({mobiles3}) => {

    const params = useParams()
    const { LoadReference, ref } = useReferencia()
    
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
      
  }, [params.id]);

    // Iframe Body Onclick
  useEffect(() => {
    const iframeclick = async () => {
      const bodyt = await document.getElementById(code).contentWindow.document.body     
      const body = {id, code, referenceid, video, date, battery}
      bodyt.onclick = () => handleModalEditarMobileadmin(body)
      }
    iframeclick()
}, [params.id])

    const mobilefiltrado = ref.filter(function(el){
        return (el.id == params.id)
      })
    
    useEffect( () => {
        LoadReference(params.id)
    }, [params.id])

    const refresh = () => {
        try {                     
            location.reload();
        } catch (error) {
            
        }
        
    }

    return (
    <>
        <div className='lg:w-[884.49px] h-fit lg:h-[706.83px] bg-[#FF5E59] lg:flex lg:flex-row p-[12px] gap-[24.83px] rounded-[19.27px] justify-center lg:items-center'>
            <iframe id={code} onLoad={() => iframeclick()}
            width="432.89" height="660.25"
            src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=0&origin=${import.meta.env.VITE_BACKEND_URL}`}
            className='my-[11.29px] h-[400px] sm:w-[432px] sm:h-[660.25px] w-[300px] rounded-[19.27px] gap-[15.41px]'
            title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>            
            <button 
            onClick={refresh}
            className='hidden lg:visible h-fit w-fit bg-[#8F00FF] items-center lg:flex rounded-[30px]
            justify-center text-white py-[7px] px-[15px] gap-[10px] lg:fixed lg:top-0'>Cerrar</button> 
            <div className='flex flex-col items-center justify-center ml-10 sm:ml-10 w-fit h-fit'>
                <div className='text-[40.63px] text-white flex flex-row'>
                    {mobilefiltrado.map(x => x.reference)}
                </div>
                <div className='flex justify-center text-[40.63px] text-white'>
                    Codigo: {code}
                </div>
                <div className='flex justify-center text-[40.63px] text-white   '>
                {''}Bateria: {battery}%
                </div>
            </div>
        </div>
    </>            
    )
}

export default FormPreviewMobile
