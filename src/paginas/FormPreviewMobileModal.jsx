import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const FormPreviewMobile = () => {

    const params = useParams();    
    const { LoadReference, mobiles2, ref1 } = useReferencia()
    
    useEffect( () => {
        LoadReference(params.id)
    }, [params.id])

    return (
    <>
        <div className='w-[884.49px] h-[706.83px] bg-[#FF5E59] flex flex-row p-[12px] gap-[24.83px] rounded-[19.27px] items-center'>
            <iframe width="432.89" height="660.25"
            src={mobiles2.video}
            className='my-[11.29px] rounded-[19.27px] gap-[15.41px]'
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            <div className='flex flex-col items-center ml-20'>
                <div className='text-[40.63px] text-white'>
                    {ref1.reference}
                </div>
                <div className='text-[40.63px] text-white'>
                    Codigo: {mobiles2.code}
                </div>
            </div>
        </div>
    </>            
    )
}

export default FormPreviewMobile