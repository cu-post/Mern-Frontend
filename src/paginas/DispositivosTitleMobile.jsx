import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom'

const DispositivosTitleMobile = () => {

  const params = useParams();
  const { ref } = useReferencia()

  const reference = ref.filter(function(el){
    return (el.id == params.id)
  })  

    return (
      <>     
        <span className='font-bold w-[1440px] text-3xl p-4 md:ml-20 justify-center flex md:justify-between'>{reference.map(x => x.reference)}</span>
        <a className='font-bold text-3xl w-2/2 p-4'
        href={`${import.meta.env.VITE_FRONTEND_Mobile_URL}`}
        >
            <div className='h-[69.59px] w-[200.12px] bg-[#8F00FF] items-center flex rounded-[30px] justify-center text-white py-[15px] px-[20px] gap-[10px]'>Dispositivos</div>
          </a>
      </>
    )
  }

export default DispositivosTitleMobile