import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useReferencia from '../hooks/useReferencia'
import FormularioReferenciaAdmin from '../Formularios/FormularioReferenciaAdmin'

const EditarReferencia = () => {

  const params = useParams();
  const { LoadReference } = useReferencia()
  
  useEffect( () => {
    LoadReference(params.id)
  }, [])



    return (
      <> 
        <div className="flex flex-col align-middle justify-center top-0">
          <FormularioReferenciaAdmin/>
        </div>
      </>
    )
  }

export default EditarReferencia