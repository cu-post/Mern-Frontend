import PreviewReferenciaMobile from '../components/PreviewReferenciaMobile';
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
        <div className="shadow rounded-lg flex-row w-[1365px] grid grid-cols-5 text-[22.8px] text-white">
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