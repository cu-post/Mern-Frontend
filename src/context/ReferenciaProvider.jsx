import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'

const ReferenciaContext = createContext();


const ReferenciaProvider = ({children}) => {

    const [ alerta, setAlerta] = useState({});
    const [ cargando, setCargando] = useState(false);
    const [ ref, setRef] = useState([]);
    const [ refid, setRefid] = useState([]);
    const [ ref1, setRef1] = useState([]);
    const [ mobiles, setMobiles] = useState([]);
    const [ mobile, setMobile] = useState([]);
    const [ mobiles2, setMobiles2] = useState({});
    const [ mobiles3, setMobiles3] = useState({});
    const [ reff, setReff] = useState({});
    const [ buscador, setBuscador] = useState(false);
    const [ modalAñadirReferencia , setModalAñadirReferencia] = useState(false);
    const [ modalAñadirReferenciaMobile , setModalAñadirReferenciaMobile] = useState(false);
    const [ modalPreviewMobile , setModalPreviewMobile] = useState(false);
    const [ modalEditarMobile , setModalEditarMobile] = useState(false);
    const [ modalEditarMobileAdmin , setModalEditarMobileAdmin] = useState(false);

    
    useEffect(() => {
        const LoadReferences = async () => {
            const { data } = await clienteAxios('/reference')
            setRef(data)
            }
      
        LoadReferences()
        }, [])

    useEffect(() => {
        const LoadReferencesid = async () => {
            const { data } = await clienteAxios('/reference/id')
            setRefid(data)
            }
        
        LoadReferencesid()
        }, [])

    const LoadReference = async id => {
        setCargando(true)
        try {
        const { data } = await clienteAxios(`/reference/${id}`)
        setRef1(data)
        setAlerta({})
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        } finally {
            setCargando(false)
        }
    }

    useEffect(() => {
        const LoadMobiles = async () => {
            const { data } = await clienteAxios(`/mobile`)
            setMobiles(data)
            }
      
        LoadMobiles()
        }, [])

    
    const LoadMobile = async id => {
        setCargando(true)
        try {
        const { data } = await clienteAxios(`/mobile/modelo/${id}`)
        setMobile(data)
        setAlerta({})
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
        } finally {
            setCargando(false)
        }
    }


    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
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
          const { data } = await clienteAxios.patch(`/mobile/${ref1.id}`, ref1)
          setMobiles([data])     
          
          setAlerta({
            msg: 'Mobile Actualizado Correctamente',
            error: false
        })

        setTimeout(() => {
            setAlerta({})
            window.location.reload();
        }, 3000);

          } catch (error) {
              console.log(error)
          }
    }
    
    const nuevoReferenciaMobile = async ref1 => {        
        try {
        const { data } = await clienteAxios.post('/mobile', ref1)
        setMobiles([...mobiles, data])     

        setAlerta({
            msg: 'Mobile Creado Correctamente',
            error: false
        })

        setTimeout(() => {
            setAlerta({})
            window.location.reload();
        }, 3000);
    } catch (error) {setAlerta({
        msg: `[${error}], Problemas!`,
        error: true
    })
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

            const { data } = await clienteAxios.delete(`/mobile/${mobile.id}`, config)

            // Sincronizar el state
            const mobileActualizados = mobiles.filter(mobilesState => mobilesState.code !== mobile.code )
            setMobiles(mobileActualizados)                

            setAlerta({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                window.location.reload();
            }, 3000);
        } catch (error) {setAlerta({
            msg: `[${error}], Problemas!`,
            error: true
        })
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
          
          setAlerta({
            msg: 'Referencia Actualizada Correctamente',
            error: false
        })

        setTimeout(() => {
            setAlerta({})
            window.location.reload();
        }, 3000);

          } catch (error) {setAlerta({
            msg: `[${error}], Problemas!`,
            error: true
        })
        }
    }

    const nuevoReferencia = async ref1 => {        
        try {
        const { data } = await clienteAxios.post('/reference', ref1)
        setRef([...ref, data])      

        setAlerta({
            msg: 'Referencia Creada Correctamente',
            error: false
        })

        setTimeout(() => {
            setAlerta({})
            window.location.reload();
        }, 3000);
    } catch (error) {setAlerta({
        msg: `[${error}], Problemas!`,
        error: true
    })
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

            setAlerta({
                msg: data.msg,
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                window.location.reload();
            }, 3000);
        } catch (error) {setAlerta({
            msg: `[${error}], Problemas!`,
            error: true
        })
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
        setMobiles2({})
    }

    const HandleEditarMobile = () => {
        setModalEditarMobile(!modalEditarMobile)
    }

    const HandleEditarMobileAdmin = () => {
        setModalEditarMobileAdmin(!modalEditarMobileAdmin)        
        setMobiles3({})
    }

    const handleModalMostrarMobile = mobiles3 => {
        setMobiles2(mobiles3)
        setModalPreviewMobile(true)
    }

    const handleModalEditarMobile = reff => {
        setReff(reff)
        setModalEditarMobile(true)
    }

    const handleModalEditarMobileadmin = mobiles3 => {
        setModalEditarMobileAdmin(true)
    }


    return (
        <ReferenciaContext.Provider
            value={{
                ref,
                refid,
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
                mobiles3,
                reff,
                handleModalEditarMobile,
                HandleEditarMobile,
                modalEditarMobile,
                modalEditarMobileAdmin,
                eliminarReferencia,
                submitReferenciaMobile,
                editarReferenciaMobile,
                nuevoReferenciaMobile,
                eliminarReferenciaMobile,
                handleModalEditarMobileadmin,
                HandleEditarMobileAdmin,
                mostrarAlerta,
                alerta,
                cargando,
                





            }}            
        >{children}
        </ReferenciaContext.Provider>
    )
}

export { 
    ReferenciaProvider
}

export default ReferenciaContext