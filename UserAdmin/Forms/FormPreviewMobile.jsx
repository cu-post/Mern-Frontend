import useReferencia from '../hooks/useReferencia';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const FormPreviewMobile = () => {

    const params = useParams();   
    const { ref, LoadMobile, mobile, mobiles } = useReferencia();


    const mobilefiltrado = mobiles.filter(function(el){
        return (el.code == params.id)
      })

    const id = mobilefiltrado.map(x => x.id)
    
    const reffiltrado = ref.filter(function(el){
    return (el.id == mobile.referenceId)
    })

    useEffect(() => {
        LoadMobile(id)
    }, [mobiles])

    return (
    <>
        <div className='
              lg:w-[884.49px] h-fit lg:h-[706.83px] bg-gray-400 lg:flex md:flex-row p-[12px] rounded-[19.27px] 
              justify-center lg:items-center md:w-[700px] w-[320px] overflow-y-visible flex flex-col-reverse sm:flex-col'>
            <iframe width="432.89" height="600.25"
            src={`https://www.youtube.com/embed/${mobile.video}?autoplay=1&muted=1`}
            className='my-[11.29px] rounded-[19.27px] gap-[15.41px] w-[310px] h-[400px] md:w-[432.89px] md:h-[660.25px]'
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            <div className='flex flex-col items-center justify-center w-full h-full md:text-[40.63px] text-white'>
                <div className=''>
                    {reffiltrado.map(x => x.reference)}
                </div>
                <div className=''>
                    Codigo: {mobile.code}
                </div>                
                <div className=''>
                    Batería: {mobile.battery}%
                </div>
            </div>
        </div>
    </>            
    )
}

export default FormPreviewMobile
