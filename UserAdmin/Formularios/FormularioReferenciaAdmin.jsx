import { useState } from 'react'
import useReferencia from '../hooks/useReferencia'
import Alerta from '../components/Alerta';

const FormularioReferenciaAdmin = () => {

    const { submitReferencia, alerta, mostrarAlerta, HandleAĆ±adirReferencia} = useReferencia();   

    const [reference, setReference] = useState('')
    const [img, setImg] = useState('')
    const [id, setId] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();

        if([reference, img].includes('') ) {
            mostrarAlerta({
                msg: 'Todos los Campos son Obligatorios',
                error: true
            })

            return
        }

        // Pasar los datos hacia el provider
        await submitReferencia({reference, img})

        setReference('')
        setImg('')
        setId('')
    }
    
    const { msg } = alerta

    return (
    <>
        <button 
            onClick={HandleAĆ±adirReferencia}
            className='h-fit w-fit bg-[#8F00FF] flex items-end rounded-[30px]
            justify-center text-white mb-1 px-[15px] gap-[10px]'>Cerrar
        </button> 
        <form 
                    className="bg-[#FF5E59] w-fit h-fit shadow pt-[37px] pr-[44px] pb-[37px] pl-[44px] rounded-[23.35px]"
                    onSubmit={handleSubmit}             
            >
            {msg && <Alerta alerta={alerta} />}
                        <div className='mb-5'>
                            <label
                                className="text-white uppercase font-bold text-sm"
                                htmlFor="reference"
                            >Nombre de Referencia</label>

                            <input
                                id="reference"
                                type="text"
                                className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                placeholder={reference}
                                value={reference}
                                onChange={e => setReference(e.target.value)}
                            />
                        </div>

                        <div className='mb-5 flex flex-col'>
                            <label
                                className="text-white uppercase font-bold text-sm"
                                htmlFor="img"
                            >Url Img [No puede ser Igual a otra subida previamente]</label>

                            <input
                                id="img"
                                type="url"
                                className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                placeholder={img}
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

                        <input
                            type="submit"
                            value={id ? 'Actualizar Referencia': 'Crear Referencia'}
                            className='bg-white w-full p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                        />
                </form>
    </>
            
    )
}

export default FormularioReferenciaAdmin