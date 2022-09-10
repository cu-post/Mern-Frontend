import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'


const DispositivosTitleMobile = () => {

  const params = useParams();
  const { LoadReference, ref1, mobile } = useReferencia()

  useEffect( () => {
    LoadReference(mobile.referenceId ? mobile.referenceId : params.id)
  }, [mobile.referenceId])

    return (
      <>     
        <span className='font-bold w-3/5 text-3xl p-4 items-center flex'>{ref1.reference}</span>
        <a className='font-bold text-3xl w-2/2 p-4'
        href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}/perfil`}
        >
            <div className='h-[69.59px] w-[200.12px] bg-[#8F00FF] items-center flex rounded-[30px] justify-center text-white py-[15px] px-[20px] gap-[10px]'>Dispositivos</div>
          </a>
      </>
    )
  }

export default DispositivosTitleMobile