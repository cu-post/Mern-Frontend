import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'


const ReferenciaContext = createContext();


const ReferenciaProvider = ({children}) => {

    const [ ref, setRef] = useState([]);
    const [ ref1, setRef1] = useState([]);
    const [ mobiles, setMobiles] = useState([]);
    const [ mobile, setMobile] = useState([]);
    const [ mobiles2, setMobiles2] = useState({});
    const [ reff, setReff] = useState({});
    const [ buscador, setBuscador] = useState(false);
    const [ modalAñadirReferencia , setModalAñadirReferencia] = useState(false);
    const [ modalAñadirReferenciaMobile , setModalAñadirReferenciaMobile] = useState(false);
    const [ modalPreviewMobile , setModalPreviewMobile] = useState(false);
    const [ modalEditarMobile , setModalEditarMobile] = useState(false);
    const [ modalEditarMobileAdmin , setModalEditarMobileAdmin] = useState(false);
    const [ allow , setAllow] = useState(false);

    useEffect(() => {
        const LoadReferences = async () => {
            const { data } = await clienteAxios('/reference')
            setRef(data)
            }
      
        LoadReferences()
        }, [])

    
    const LoadReference = async id => {
        const { data } = await clienteAxios(`/reference/${id}`)
        setRef1(data)
    }

    useEffect(() => {
        const LoadMobiles = async id => {
            const { data } = await clienteAxios(`/mobile/${id}`)
            setMobiles(data)
            }
      
        LoadMobiles()
        }, [])

    
    const LoadMobile = async id => {
        const { data } = await clienteAxios(`/mobile/modelo/${id}`)
        setMobile(data)
    }    

    // Mobiles

    const submitReferenciaMobile = async ref1 => {
        if(ref1.code) {
            await editarReferenciaMobile(ref1)  
        } else {
            console.log("Nuevito")
            await nuevoReferenciaMobile(ref1)
        }
    }

    const editarReferenciaMobile = async ref1 => {    
        try {
          const { data } = await clienteAxios.patch(`/mobile/${ref1.code}`, ref1)
          setMobiles([data])     
          window.location.reload();
          } catch (error) {
              console.log(error)
          }
    }
    
    const nuevoReferenciaMobile = async ref1 => {        
        try {
        const { data } = await clienteAxios.post('/mobile', ref1)
        setMobiles([...mobiles, data])       
        window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarReferenciaMobile = async mobile => {
        console.log(mobile)
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/mobile/${mobile.code}`, config)

            // Sincronizar el state
            const mobileActualizados = mobiles.filter(mobilesState => mobilesState.code !== mobile.code )
            setMobiles(mobileActualizados)            
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    // Referencias

    const submitReferencia = async ref1 => {
        if(ref1.id) {
            await editarReferencia(ref1)  
        } else {
            await nuevoReferencia(ref1)
        }
    }

    const editarReferencia = async ref1 => {    
        try {
          const { data } = await clienteAxios.patch(`/reference/${ref1.id}`, ref1)
          setRef([data])     
          window.location.reload();
          } catch (error) {
              console.log(error)
          }
    }

    const nuevoReferencia = async ref1 => {        
        try {
        const { data } = await clienteAxios.post('/reference', ref1)
        setRef([...ref, data])       
        window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarReferencia = async ref1 => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/reference/${ref1.id}`, config)

            // Sincronizar el state
            const ref1Actualizados = ref.filter(refState => refState.id !== ref1.id )
            setRef(ref1Actualizados)            
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuscador = () => {
        setBuscador(!buscador)
    }

    const HandleAñadirReferencia = () => {
        setModalAñadirReferencia(!modalAñadirReferencia)
    }

    const HandleAñadirReferenciaMobile = () => {
        setModalAñadirReferenciaMobile(!modalAñadirReferenciaMobile)
    }

    const HandlePreviewMobile = () => {
        setModalPreviewMobile(!modalPreviewMobile)
    }

    const HandleEditarMobile = () => {
        setModalEditarMobile(!modalEditarMobile)
    }

    const HandleEditarMobileAdmin = () => {
        setModalEditarMobileAdmin(!modalEditarMobileAdmin)
    }

    const handleModalMostrarMobile = mobiles2 => {
        setMobiles2(mobiles2)
        setModalPreviewMobile(true)
    }

    const handleModalEditarMobile = reff => {
        setReff(reff)
        setModalEditarMobile(true)
    }

    const handleModalEditarMobileadmin = mobiles2 => {
        setMobiles2(mobiles2)
        setModalEditarMobileAdmin(true)
    }

    const handleAllow = () => {        
        setAllow(!allow)
    }

    return (
        <ReferenciaContext.Provider
            value={{
                ref,
                ref1,
                LoadReference,
                mobiles,
                mobile,
                LoadMobile,
                submitReferencia,
                editarReferencia,
                nuevoReferencia,
                handleBuscador,
                HandleAñadirReferencia,
                HandleAñadirReferenciaMobile,
                modalAñadirReferencia,
                modalAñadirReferenciaMobile,
                HandlePreviewMobile,
                modalPreviewMobile,
                buscador,
                handleModalMostrarMobile,
                setModalPreviewMobile,
                mobiles2,
                reff,
                handleModalEditarMobile,
                HandleEditarMobile,
                modalEditarMobile,
                modalEditarMobileAdmin,
                handleAllow,
                allow,
                eliminarReferencia,
                submitReferenciaMobile,
                editarReferenciaMobile,
                nuevoReferenciaMobile,
                eliminarReferenciaMobile,
                handleModalEditarMobileadmin,
                HandleEditarMobileAdmin




            }}            
        >{children}
        </ReferenciaContext.Provider>
    )
}

export { 
    ReferenciaProvider
}

export default ReferenciaContext