import { useState, useEffect } from 'react'
import useReferencia from '../hooks/useReferencia'
import Alerta from '../components/Alerta';

const FormularioReferenciaAdminEditarMobile = ({mobiles3}) => {
    
    const { submitReferenciaMobile, eliminarReferenciaMobile, ref, mostrarAlerta, alerta} = useReferencia(); 
    
    console.log(mobiles3)

    const reference = ref.filter(function(el){
        return (el.id == mobiles3.id)
      })  

    const [referenceId, setReferenceId] = useState('')
    const [video, setVideo] = useState('')
    const [code, setCode] = useState('')
    const [battery, setBattery] = useState('')
    const id = mobiles3.id

    useEffect(() => {
        if( mobiles3.id ) {
            setReferenceId(mobiles3.referenceId)
            setVideo(mobiles3.video)
            setCode(mobiles3.code)
            setBattery(mobiles3.battery)
        } 
    }, [mobiles3.id])


    const handleSubmit = async e => {
        e.preventDefault();

        if([referenceId, video, code, battery].includes('') ) {
            mostrarAlerta({
                msg: 'Todos los Campos son Obligatorios',
                error: true
            })

            return
        }

        // Pasar los datos hacia el provider
        await submitReferenciaMobile({id, referenceId, video, code, battery})
        
        setReferenceId(mobiles3.referenceId)
        setVideo(mobiles3.video)
        setCode(mobiles3.code)
        setBattery(mobiles3.battery)
        
    }

    const { msg } = alerta

    const handleClick = () => {
        if(confirm('¿Deseas eliminar este Mobile?')) {
            eliminarReferenciaMobile({id})
        } 
    }

    const refresh = () => {
        try {                     
            location.reload();
        } catch (error) {
            
        }
        
    }


    return (
    <>
                <button 
                    onClick={refresh}
                    className='h-fit w-fit bg-[#8F00FF] flex items-end rounded-[30px]
                    justify-center text-white mb-1 px-[15px] gap-[10px]'>Cerrar
                </button> 
    <form 
                className="bg-[#FF5E59] items-center flex flex-col w-fit h-fit shadow pt-[37px] pr-[44px] pb-[37px] pl-[44px] rounded-[23.35px]"
                onSubmit={handleSubmit}
            >   
            {msg && <Alerta alerta={alerta} />}

                    <div className='mb-5'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="referenceId"
                        >Editar Mobile {reference.map(x => x.reference)}</label>
                    </div>
                    
                    <div className='mb-5'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="code"
                        >Codigo</label>

                        <input
                            id="code"
                            type="number"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={mobiles3.code}
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-5'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="battery"
                        >Bateria</label>

                        <input
                            id="battery"
                            type="number"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={mobiles3.battery}
                            value={battery}
                            onChange={e => setBattery(e.target.value)}
                        />
                    </div>

                    <div className='mb-5 w-full'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="vid"
                        >Url Vid</label>

                        <input
                            id="vid"
                            type="text"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={mobiles3.video}
                            value={video}
                            onChange={e => setVideo(e.target.value)}
                        />                       
                    </div>

                    <input
                        type="submit"
                        value={mobiles3.id ? 'Actualizar Mobile': 'Crear Mobile'}
                        className='bg-white w-full p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                        
                    />
                    <button 
                    className='mt-3 bg-white w-full p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                    onClick={handleClick}>Eliminar El Mobile?</button>
            </form>
    </>
            
    )
}

export default FormularioReferenciaAdminEditarMobile