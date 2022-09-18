import React from 'react'

const PreviewReferencia = ({reff}) => {

  const { reference, img, id, agotado} = reff

  return (
    <>
      <a href={!agotado ? `${import.meta.env.VITE_FRONTEND_Mobile_URL}/mobile/${id}` : ""}
    className=' bg-white hover:bg-[#481373] h-[394.07px] w-[240.17px] gap-1 p-2 rounded-[24.43px] m-1 relative border border-black text-black hover:text-white '>
      <div className='flex items-center flex-col'>
        <img 
        className='h-[221.46px] w-fit p-4 rounded-[24.43px] shadow-sm'
        src={img} alt="" />
      </div>      
      <div className='text-md font-sans uppercase'>
          {reference}
      </div>
      <div className='flex flex-row absolute bottom-0 items-center justify-between w-[210px] mb-4'>
          <div className='text-md font-sans uppercase'>
              {''}Ref: {id}
          </div>
          <div
            className={`${!agotado ? 'bg-white' : 'bg-white text-black'} border border-black w-fit px-4 py-3 text-[#8F00FF] uppercase font-bold text-[14.9167px] rounded-[22.38px]`}
            >{!agotado  ? 'Disponible' : 'Agotado'}</div>
      </div>          
    </a>
    </>
    
    
  )
}

export default PreviewReferencia