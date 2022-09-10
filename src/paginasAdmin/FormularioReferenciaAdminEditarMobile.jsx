import { useState, useEffect } from 'react'
import useReferencia from '../hooks/useReferencia'

const FormularioReferenciaAdminEditarMobile = () => {
    
    const { submitReferenciaMobile, mobiles2, eliminarReferenciaMobile} = useReferencia();   

    const [referenceId, setReferenceId] = useState('')
    const [video, setVideo] = useState('')
    const code = mobiles2.code

    useEffect(() => {
        if( code ) {
            setReferenceId(mobiles2.referenceId)
            setVideo(mobiles2.video)
        } 
    }, [code])


    const handleSubmit = async e => {
        e.preventDefault();

        // Pasar los datos hacia el provider
        await submitReferenciaMobile({referenceId, video, code})

        setReferenceId('')
        setVideo('')
        
    }

    const handleClick = () => {
        if(confirm('¿Deseas eliminar este proyecto?')) {
            eliminarReferenciaMobile({code})
        } 
    }


    return (
            <form 
                className="bg-[#FF5E59] w-fit h-fit shadow pt-[37px] pr-[44px] pb-[37px] pl-[44px] rounded-[23.35px]"
                onSubmit={handleSubmit}
            >   <button onClick={handleClick}>Eliminar la referencia {code}?</button>

                    <div className='mb-5'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="referenceId"
                        >Nombre de Referencia</label>

                        <input
                            id="referenceId"
                            type="text"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={mobiles2.referenceId}
                            value={referenceId}
                            onChange={e => setReferenceId(e.target.value)}
                        />
                    </div>

                    <div className='mb-5 flex flex-col'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="vid"
                        >Url Vid</label>

                        <input
                            id="vid"
                            type="url"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={mobiles2.video}
                            value={video}
                            onChange={e => setVideo(e.target.value)}
                        />                       
                    </div>

                    <input
                        type="submit"
                        value={mobiles2.code ? 'Actualizar Referencia': 'Crear Referencia'}
                        className='bg-white w-full p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                        
                    />
            </form>
    )
}

export default FormularioReferenciaAdminEditarMobile