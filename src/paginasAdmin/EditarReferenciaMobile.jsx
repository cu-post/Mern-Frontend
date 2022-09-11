import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useReferencia from '../hooks/useReferencia'
import FormularioReferenciaAdminMobile from './FormularioReferenciaAdminMobile'

const EditarReferenciaMobile = () => {

  const params = useParams();
  const { LoadReference } = useReferencia()
  
  useEffect( () => {
    LoadReference(params.id)
  }, [])



    return (
      <> 
        <div className="flex flex-col top-0">
          <FormularioReferenciaAdminMobile/>
        </div>
      </>
    )
  }

export default EditarReferenciaMobile