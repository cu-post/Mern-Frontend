import PreviewReferencia from '../components/PreviewReferencia';
import useReferencia from '../hooks/useReferencia';

const Main = () => {
    const { ref } = useReferencia()

    return (
      <>
      <div className="shadow rounded-lg flex-col flex items-center w-[1365px] sm:grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        text-[22.8px] text-white">
        {
          ref.map((reff, index) => (
            <PreviewReferencia 
                      key={index}
                      reff={reff}
                  />
          ))
        }
      </div>
      </>
  )
}

export default Main