import { useContext } from 'react'
import ReferenciaContext from '../context/ReferenciaProvider'

const useReferencia = () => {
    return useContext(ReferenciaContext)
}

export default useReferencia