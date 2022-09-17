import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'


const ReferenciaContext = createContext();


const ReferenciaProvider = ({children}) => {

    const [ref, setRef] = useState([]);
    const [ref1, setRef1] = useState([]);

    

    useEffect(() => {
        const LoadReferences = async () => {
            const { data } = await clienteAxios('/mobile')
            setRef(data)
            }
      
        LoadReferences()
        }, [])

    
    const LoadReference = async id => {
        const { data } = await clienteAxios(`/mobile/${id}`)
        setRef1(data)
    }

    const submitReferencia = async ref1 => {
        console.log(ref1.id)
        if(ref1.id) {
            await editarReferencia(ref1)
        } else {
            await nuevoReferencia(ref1)
        }
    }

    const editarReferencia = async ref1 => {
          const { data } = await clienteAxios.patch(`/mobile/${ref1.id}`, ref1)
          setRef(data)
    }

    const nuevoReferencia = async id => {
        const { data } = await clienteAxios.post('/mobile', id)

        setRef([...ref, data])

    }

    return (
        <ReferenciaContext.Provider
            value={{
                ref,
                ref1,
                LoadReference,
                submitReferencia,
                editarReferencia,
                nuevoReferencia,
                handleModalMostrarMobile


            }}            
        >{children}
        </ReferenciaContext.Provider>
    )
}

export { 
    ReferenciaProvider
}

export default ReferenciaContext