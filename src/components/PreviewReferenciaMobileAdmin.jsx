import React from 'react'
import useReferencia from '../hooks/useReferencia'
import ModalPreviewMobile from '../paginas/ModalPreviewMobile'
import ModalEditarMobileAdmin from '../paginasAdmin/ModalEditarMobileAdmin'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PreviewReferenciaMobileAdmin = ({mobiles3}) => {

  const params = useParams()

  const { handleModalMostrarMobile, handleModalEditarMobileadmin } = useReferencia()

  console.log(mobiles3)

  // Iframe Body Onclick
  const [id, setId] = useState('')
  const [code, setCode] = useState('')
  const [date, setDate] = useState('')
  const [referenceid, setReferenceid] = useState('')
  const [video, setVideo] = useState('')

  useEffect(() => {
      if(params.id ) {
          setId(mobiles3.id)
          setCode(mobiles3.code)
          setDate(mobiles3.date?.split('T')[0])
          setReferenceid(mobiles3.Referenceid)
          setVideo(mobiles3.video)
          return
      } 
      setId('')
      setCode('')
      setDate('')
      setReferenceid('')
      setVideo('')
      
  }, [params.id]);

    // Iframe Body Onclick
useEffect(() => {
  const iframeclick = async () => {
    const bodyt = await document.getElementById(code).contentWindow.document.body
    console.log(bodyt)
    const body = {id, code, referenceid, video}
    bodyt.onclick = () => handleModalEditarMobileadmin(body)
    }
  iframeclick()
}, [params.id])  

  console.log(id, code, referenceid, video)


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
          <iframe id={code} onLoad={() => iframeclick()}
          className="absolute" width="190" height="335">
          </iframe>
          <iframe width="180" height="315"
          src={`https://www.youtube.com/embed/${video}`}
          className='mt-6 mb-3 rounded-[24.43px]'
          title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          >
          </iframe>
          </div>     
          <button onClick={() => handleModalMostrarMobile(mobiles3)} className='flex-col items-center flex'>
            <div className='w-fit pl-4 pr-4 pb-4'>
              {referenceid}
              <div 
              className='bg-white w-fit px-4 py-1 mb-6 text-[#8F00FF] font-bold text-[14.9167px] rounded-[22.38px]'>
                  {''}Ver
              </div>
            </div>
          </button>   
        </div>         
      </div>
      
    </div>    
    <ModalPreviewMobile/>
    <ModalEditarMobileAdmin/>
  </>
    
  )
}

export default PreviewReferenciaMobileAdmin
