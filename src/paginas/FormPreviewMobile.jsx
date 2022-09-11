import useReferencia from '../hooks/useReferencia';
import { useEffect, useState } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useParams } from 'react-router-dom';

const FormPreviewMobile = () => {

    const params = useParams();   
    const [ mobiles, setMobiles] = useState([]);
    const { ref } = useReferencia();


    const mobilefiltrado = mobiles.filter(function(el){
        return (el.code == params.id)
      })

    const number = mobilefiltrado.map(x => x.referenceId)

    const video = mobilefiltrado.map(x => x.video)
    
    const reffiltrado = ref.filter(function(el){
    return (el.id == number)
    })
      
      useEffect(() => {
        const LoadMobiles = async () => {
            const { data } = await clienteAxios(`/mobile`)
            setMobiles(data)
            }
      
        LoadMobiles()
        }, [])

    return (
    <>
        <div className='justify-center w-fit lg:w-[884.49px] h-fit lg:h-[706.83px] bg-[#FF5E59] flex flex-col lg:flex-row p-[12px] gap-[24.83px] rounded-[19.27px] items-center'>
            <iframe width="432.89" height="600.25"
            src={video}
            className='my-[11.29px] rounded-[19.27px] gap-[15.41px] w-[310px] h-[400px] md:w-[432.89px] md:h-[660.25px]'
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
            <div className='flex flex-col items-center md:ml-20 justify-center'>
                <div className='flex justify-center text-[40.63px] text-white'>
                    {reffiltrado.map(x => x.reference)}
                </div>
                <div className='flex justify-center text-[40.63px] text-white'>
                    Codigo: {mobilefiltrado.map(x => x.code)}
                </div>
            </div>
        </div>
    </>            
    )
}

export default FormPreviewMobile