import { useEffect } from 'react'
import PreviewReferencia from '../components/PreviewReferencia';
import useReferencia from '../hooks/useReferencia';

const Main = () => {
    const { ref } = useReferencia()

    return (
      <>
      <div className="shadow rounded-lg flex-row w-[1365px] grid grid-cols-5 text-[22.8px] text-white">
        {ref.length ? 
          ref.map((reff, index) => (
            <PreviewReferencia 
                      key={index}
                      reff={reff}
                  />
          ))
          : <p className=" text-center text-gray-600 uppercase  p-5">No hay Referencias aún</p>}
      </div>
      </>
  )
}

export default Main