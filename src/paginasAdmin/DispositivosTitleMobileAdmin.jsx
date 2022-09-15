import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const DispositivosTitleMobile = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { ref, mobile } = useReferencia()

  const mobileAllow = params.id == mobile.code

  const reference = ref.filter(x => x.id == params.id)

    return (
      <>  
      <div className='flex flex-col-reverse sm:flex-row md:w-full p-4 sm:ml-20 md:ml-10 2xl:w-1/2 justify-center items-center md:justify-between'>
      <span className='font-bold text-3xl '>{!mobileAllow ? reference.map(x => x.reference) : mobile.code}</span>
        <button className='font-bold text-3xl sm:w-2/2 p-4'
        onClick={mobileAllow ? (() => navigate(`/mobileAdmin/${mobile.referenceId}`)) : (() => navigate("/perfil")) }
        >
        <div className='h-[69.59px] w-[200.12px] bg-[#8F00FF] items-center flex rounded-[30px] justify-center text-white py-[15px] px-[20px] gap-[10px]'>{mobileAllow ?"Mobiles" : "Dispositivos"}</div>
        </button>
      </div>        
      </>
    )
  }

export default DispositivosTitleMobile