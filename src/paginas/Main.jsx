import { useEffect, useState } from 'react'
import PreviewReferencia from '../components/PreviewReferencia';
import clienteAxios from '../config/clienteAxios'

const Main = () => {
    
    const [ ref1, setRef] = useState([]);
    console.log(ref1)

    useEffect(() => {
      const LoadReferences = async () => {
          const { data } = await clienteAxios('/reference')
          
          setRef(data)
          }
    
      LoadReferences()
      }, [Main])

    return (
      <>
      <div className="shadow rounded-lg flex-row w-[1365px] grid grid-cols-5 text-[22.8px] text-white">
        {ref1.length ? 
          ref1.map((reff, index) => (
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