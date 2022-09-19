import PreviewReferenciaEditar from '../Modals/PreviewReferenciaEditar'
import { useState } from 'react'

const PreviewReferenciaAdmin = ({reff}) => {
  
  const [showModal2, setShowModal2] = useState(false);

  const { reference, img, id, agotado } = reff

  return (
  <>
    <div className=' bg-white hover:bg-[#481373] h-[394.07px] w-[240.17px] gap-1 p-2 rounded-[24.43px] m-1 relative border border-black text-black hover:text-white '>
      <div className='flex justify-end'>
        <button 
        onClick={() => setShowModal2(true)}
        className='bg-white border border-black w-fit px-4 py-1 text-[#8F00FF] uppercase font-bold rounded-[22.38px] text-sm'>
          Editar
        </button>
      </div>    
      <a href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}/mobile/${id}`}
      className=''>
        <div className='flex items-center flex-col'>
          <img 
          className='h-[221.46px] w-fit p-3 rounded-[24.43px]'
          src={img} alt="" />
        </div>      
      <div className='text-md font-sans uppercase'>
          {reference}
      </div>
        <div className='flex flex-col  '>
              <div className='flex flex-row absolute bottom-0 items-center justify-between w-[210px] mb-4'>
                <div className='text-md font-sans uppercase'>            
                  Ref: {id} {' '}
                </div>
                <div
                  className={`${!agotado ? 'bg-white bottom-0 ' : 'bg-white text-black'} border border-black w-fit px-4 py-3 text-[#8F00FF] uppercase font-bold text-[14.9167px] rounded-[22.38px]`}
                  >{!agotado ? 'Disponible' : 'Agotado'}</div>
              </div>
        </div>          
      </a>
    </div>
    {showModal2 ? (
          <PreviewReferenciaEditar
          setShowModal2={setShowModal2}
          reff={reff}/>
      ) : null}
  </>
    
  )
}

export default PreviewReferenciaAdmin