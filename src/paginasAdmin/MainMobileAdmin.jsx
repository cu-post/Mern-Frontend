import PreviewReferenciaMobile from '../components/PreviewReferenciaMobileAdmin';
import useReferencia from '../hooks/useReferencia';
import { useParams } from 'react-router-dom'

const Main = () => {
    const { mobiles } = useReferencia()

    const params = useParams();
    const id = params.id

    const mobilefiltrado = mobiles.filter(function(el){
      return (el.referenceId == id)
    })

    return (
      <>
        <div className="shadow rounded-lg flex-row w-[1365px] grid lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
       justify-center text-[22.8px] text-white">
          {
            mobilefiltrado.map((mobiles, index) => (
              <PreviewReferenciaMobile
                        key={index}
                        mobiles2={mobiles}
                    />
            ))
          }
        </div>
      </>
  )
}

export default Main