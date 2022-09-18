import useReferencia from "../hooks/useReferencia"
import { useParams } from 'react-router-dom'

const PreviewModalReferencia = ({setShowModal, mobiles3}) => {
const { ref } = useReferencia()
  const params = useParams()
  const mobilefiltrado = ref.filter(function(el){
    return (el.id == params.id)
  })


  return (
    <>
        <div
            className="flex overflow-x-hidden overflow-y-auto fixed top-0 z-50 outline-none w-screen lg:ml-28 xl:ml-0 2xl:left-0 align-middle justify-center items-center focus:outline-none"
          >
            <div className="flex mt-10">
              {/*content*/}
              <div className='
              lg:w-[884.49px] h-fit lg:h-[706.83px] bg-gray-400 lg:flex md:flex-row p-[12px] rounded-[19.27px] 
              justify-center lg:items-center md:w-[700px] w-[320px] overflow-y-visible flex flex-col-reverse sm:flex-col'>
              <iframe
                width="432.89" height="660.25"
                src={`https://www.youtube-nocookie.com/embed/${mobiles3.video}?autoplay=1&origin=${import.meta.env.VITE_BACKEND_URL}`}
                className='h-[400px] sm:w-[432px] sm:h-[660.25px] w-[300px] rounded-[19.27px] gap-[15.41px]'
                title="YouTube video player" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                <div className='flex flex-col items-center justify-center w-full h-full md:text-[40.63px] text-white'>
                    <div className=''>
                        {mobilefiltrado.map(x => x.reference)}
                    </div>
                    <div className=''>
                        Codigo: {mobiles3.code}
                    </div>
                    <div className=''>
                    {''}Bateria: {mobiles3.battery}%
                    </div>
                  <button
                    className="text-red-500 bg-white rounded-md absolute bottom-0 background-transparent font-bold uppercase px-3 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default PreviewModalReferencia