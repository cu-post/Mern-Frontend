import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const FormPreviewMobile = () => {

    const params = useParams();    
    const { LoadReference, mobiles2, ref1 } = useReferencia()
    
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
        <div className='lg:w-[884.49px] h-fit lg:h-[706.83px] bg-[#FF5E59] lg:flex lg:flex-row p-[12px] gap-[24.83px] rounded-[19.27px] lg:items-center'>
            <iframe width="432.89" height="660.25"
            src={mobiles2.video}
            className='my-[11.29px] h-[850px] sm:w-[432px] sm:h-[660.25px] w-[300px] rounded-[19.27px] gap-[15.41px]'
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>            
            <button 
            onClick={refresh}
            className='hidden lg:visible h-fit w-fit bg-[#8F00FF] items-center lg:flex rounded-[30px]
            justify-center text-white py-[7px] px-[15px] gap-[10px] lg:fixed lg:top-0'>Cerrar</button> 
            <div className='flex flex-col items-end ml-20 w-fit h-fit'>
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