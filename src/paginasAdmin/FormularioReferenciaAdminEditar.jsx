import { useState, useEffect } from 'react'
import useReferencia from '../hooks/useReferencia'

const FormularioReferenciaAdminEditar = () => {
    
    const { submitReferencia, reff, handleAllow, allow, eliminarReferencia} = useReferencia();   

    const [reference, setReference] = useState('')
    const [img, setImg] = useState('')
    const id = reff.id

    useEffect(() => {
        if( id ) {
            setReference(reff.reference)
            setImg(reff.img)
        } 
    }, [id])


    const handleSubmit = async e => {
        e.preventDefault();

        // Pasar los datos hacia el provider
        await submitReferencia({reference, img, allow, id})

        setReference('')
        setImg('')
        
    }

    const handleClick = () => {
        if(confirm('¿Deseas eliminar este proyecto?')) {
            eliminarReferencia({id})
        } 
    }


    return (
            <form 
                className="bg-[#FF5E59] w-fit h-fit shadow pt-[37px] pr-[44px] pb-[37px] pl-[44px] rounded-[23.35px]"
                onSubmit={handleSubmit}
            >   <button onClick={handleClick}>Eliminar la referencia {id}?</button>

                    <div className='mb-5'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="reference"
                        >Nombre de Referencia</label>

                        <input
                            id="reference"
                            type="text"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={reff.reference}
                            value={reference}
                            onChange={e => setReference(e.target.value)}
                        />
                    </div>

                    <div className='mb-5 flex flex-col'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="img"
                        >Url Img</label>

                        <input
                            id="img"
                            type="url"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={reff.img}
                            value={img}
                            onChange={e => setImg(e.target.value)}
                        />  
                        <input
                        hidden
                            id="img"
                            type="file"
                            className="border w-[400.02px] h-[281.73px] bg-white mt-2 placeholder-gray-400 rounded-md"
                        />                       
                    </div>

                    <div className='mb-5 flex flex-col'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="allow"
                        >Allow</label>

                        <button 
                            className={`${allow ? 'bg-white' : 'bg-white text-black'} items-center justify-center mt-3 w-fit px-4 py-3 text-[#8F00FF] uppercase font-bold text-[14.9167px] rounded-[22.38px]`}
                            onClick={handleAllow}
                            >
                            {allow? 'Disponible' : 'Agotado'}
                        </button>
                                    
                    </div>

                    <input
                        type="submit"
                        value={reff.id ? 'Actualizar Referencia': 'Crear Referencia'}
                        className='bg-white w-full p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                        
                    />
            </form>
    )
}

export default FormularioReferenciaAdminEditar