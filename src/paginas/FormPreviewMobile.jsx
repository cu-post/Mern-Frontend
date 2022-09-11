import useReferencia from '../hooks/useReferencia';
import { useEffect, useState } from 'react'
import clienteAxios from '../config/clienteAxios'

const FormPreviewMobile = () => {

    const [ mobiles, setMobiles] = useState([]);
    const { ref } = useReferencia();
      
      useEffect(() => {
        const LoadMobiles = async () => {
            const { data } = await clienteAxios(`/mobile`)
            setMobiles(data)
            }
      
        LoadMobiles()
        }, [])

    return (
    <>
        <div className='w-fit lg:w-[884.49px] h-fit lg:h-[706.83px] bg-[#FF5E59] flex flex-col lg:flex-row p-[12px] gap-[24.83px] rounded-[19.27px] items-center'>
            <iframe width="432.89" height="660.25"
            src={mobiles.map(x => x.video)}
            className='my-[11.29px] rounded-[19.27px] gap-[15.41px]'
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            <div className='flex flex-col items-center ml-20'>
                <div className='text-[40.63px] text-white'>
                    {ref.map(x => x.reference)}
                </div>
                <div className='text-[40.63px] text-white'>
                    Codigo: {mobiles.map(x => x.code)}
                </div>
            </div>
        </div>
    </>            
    )
}

export default FormPreviewMobile