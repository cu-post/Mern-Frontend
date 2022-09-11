import React from 'react'

const PreviewReferencia = ({reff}) => {

  const { reference, img, id, allow} = reff

  return (
    <a href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}/mobile/${id}`}
    className=' bg-[#373737] hover:bg-[#FF5E59] h-[394.07px] w-[240.17px] gap-1 p-2 rounded-[24.43px] m-1'>
      <div className='flex items-center flex-col'>
        <img 
        className='h-[221.46px] w-fit p-4 rounded-[24.43px]'
        src={img} alt="" />
      </div>
      
      <div className='flex flex-col'>
        <div className='w-fit pl-4 pr-4 pb-4'>
          {reference}
          <span className='flex text-sm uppercase'>
              {''}Ref: {id}
          </span>
          <div
            className={`${allow ? 'bg-white' : 'bg-white text-black'} gap-[10.65px] p-[10.65px] mt-[25px] w-fit px-4 py-3 text-[#8F00FF] uppercase font-bold text-[14.9167px] rounded-[22.38px]`}
            >{allow ? 'Disponible' : 'Agotado'}</div>
        </div>
      </div>
          
    </a>
  )
}

export default PreviewReferencia