import useReferencia from "../hooks/useReferencia"
import { useState, useEffect } from 'react'
import Alerta from '../components/Alerta'

const PreviewModalEditar = ({setShowModal1, mobiles3}) => {


    const { submitReferenciaMobile, eliminarReferenciaMobile, ref, mostrarAlerta, alerta} = useReferencia()

    const reference = ref.filter(function(el){
        return (el.id == mobiles3.referenceId)
      })  

    const [referenceId, setReferenceId] = useState('')
    const [video, setVideo] = useState('')
    const [code, setCode] = useState('')
    const [battery, setBattery] = useState('')
    const id = mobiles3.id

    useEffect(() => {
        if( mobiles3.referenceId ) {
            setReferenceId(mobiles3.referenceId)
            setCode(mobiles3.code)
            setBattery(mobiles3.battery)
        } 
    }, [])
    
    const handleSubmit = async e => {
        e.preventDefault();

        if([referenceId, code, battery].includes('') ) {
            mostrarAlerta({
                msg: 'Todos los Campos son Obligatorios',
                error: true
            })

            return
        }

        // Pasar los datos hacia el provider
        if (video =="") {
            setVideo(mobiles3.video)
            const videoX = `https://youtube.com/shorts/${mobiles3.video}?feature=share`
            setVideo(videoX)
            return
        }
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
    
  return (
  <>
    <div
        className="flex overflow-x-hidden overflow-y-auto fixed top-0 z-50 outline-none w-screen lg:ml-28 xl:ml-0 2xl:left-0 align-middle justify-center items-center focus:outline-none"
        >
    <div className="flex mt-10">
        {/*content*/}
        <form 
                className="bg-[#FF5E59] items-center flex flex-col w-fit h-fit shadow pt-[37px] pr-[44px] pb-[37px] pl-[44px] rounded-[23.35px]"
                onSubmit={handleSubmit}
            >            

            {msg && <Alerta alerta={alerta} />}

                    <div className='mb-5 w-full items-center justify-between flex'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="referenceId"
                        >Editar Mobile {reference.map(x => x.reference)}</label>
                        
                        <button
                            className="text-red-500 bg-white ml-5 rounded-md background-transparent font-bold uppercase px-3 py-1 text-sm"
                            type="button"
                            onClick={() => setShowModal1(false)}
                            >
                            Cerrar
                        </button>
                    </div>
                    
                    
                    <div className='mb-5 w-full'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="code"
                        >Codigo</label>

                        <input
                            id="code"
                            type="number"
                            className="text-black border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={code}
                            value={code}
                            onChange={e => setCode(e.target.value)}
                        />
                    </div>
                    
                    <div className='mb-5 w-full'>
                        <label
                            className="text-white uppercase font-bold text-sm"
                            htmlFor="battery"
                        >Bateria</label>

                        <input
                            id="battery"
                            type="number"
                            className="text-black border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder={battery}
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
                            className="text-black border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            placeholder="Short Video - Url Short"
                            value={video}
                            onChange={e => setVideo(e.target.value)}
                        />                       
                    </div>

                    <input
                        type="submit"
                        value={mobiles3.id ? 'Actualizar Mobile': 'Crear Mobile'}
                        className='bg-white w-full text-sm sm:text-lg p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                        
                    />
                    <button 
                    className='mt-3 bg-white w-full text-sm sm:text-lg p-3 uppercase font-bold text-[#8F00FF] rounded cursor-pointer hover:bg-sky-700 transition-colors'
                    onClick={handleClick}>Eliminar El Mobile?</button>
            </form>            
            </div>
          </div>
          <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default PreviewModalEditar