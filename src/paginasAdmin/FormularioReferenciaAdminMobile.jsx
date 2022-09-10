import { useState } from 'react'
import useReferencia from '../hooks/useReferencia'
import { useParams } from 'react-router-dom'

const FormularioReferenciaAdminMobile = () => {
    const params = useParams();

    const { submitReferenciaMobile} = useReferencia();   

    const referenceId = params.id
    const [video, setVideo] = useState('')
    const [code, setCode] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();

        // Pasar los datos hacia el provider
        await submitReferenciaMobile({referenceId, video})

        setVideo('')
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
                className="bg-[#FF5E59] w-fit h-fit shadow pt-[37px] pr-[44px] pb-[37px] pl-[44px] rounded-[23.35px]"
                onSubmit={handleSubmit}
            >   

                    <div className='mb-5'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="reference"
                        >Codigo de Referencia {referenceId}</label>
                    </div>

                    <div className='mb-5 flex flex-col'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="vid"
                        >Url Video [No puede ser Igual a otro subido previamente]</label>

                        <input
                            id="vid"
                            type="url"
                            className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={video}
                            value={video}
                            onChange={e => setVideo(e.target.value)}
                        />                       
                    </div>

                    <input
                        type="submit"
                        value={code ? 'Crear Referencia': 'Crear Referencia'}
                        className='bg-white w-full p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                    />
            </form>
        </>
            
    )
}

export default FormularioReferenciaAdminMobile