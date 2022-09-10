import PreviewReferenciaAdmin from '../components/PreviewReferenciaAdmin';
import useReferencia from '../hooks/useReferencia';

const Main = () => {
  
    const { ref } = useReferencia()

    return (
      <>
      <div className="shadow rounded-lg flex-row w-[1365px] grid grid-cols-5 text-[22.8px] text-white">
        {
          ref.map((refx, index) => (
            <PreviewReferenciaAdmin 
                      key={index}
                      reff={refx}
                  />
          ))
        }
      </div>
      </>
  )
}

export default Main