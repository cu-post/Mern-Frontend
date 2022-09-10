import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useReferencia from '../hooks/useReferencia'
import FormularioReferenciaAdmin from './FormularioReferenciaAdmin'

const EditarReferencia = () => {

  const params = useParams();
  const { LoadReference } = useReferencia()
  
  useEffect( () => {
    LoadReference(params.id)
  }, [])



    return (
      <> 
        <div className="p-10">
          <FormularioReferenciaAdmin/>
        </div>
      </>
    )
  }

export default EditarReferencia