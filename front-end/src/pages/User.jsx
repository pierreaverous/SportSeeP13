import { useParams } from 'react-router-dom'

import Bonjour from '../components/Bonjour'
import GraphiqueBarres from '../components/GraphiqueBarres'
import DiagrammeCourbe from '../components/DiagrammeCourbe'
import DiagrammeToile from '../components/DiagrammeToile'
import DiagrammeScore from '../components/DiagrammeScore'
import Energie from '../components/Energie'

const User = () => {
  const params = useParams()

  return (
    <div className="user">
      <div className="user-top">
        <Bonjour userId={params.userId} />
      </div>
      <div className="user-bottom">
        <div className="user-bottom-informations-left">
          <GraphiqueBarres userId={params.userId} />
          <div className="diagrammes">
            <DiagrammeCourbe userId={params.userId} />
            <DiagrammeToile userId={params.userId} />
            <DiagrammeScore userId={params.userId} />
          </div>
        </div>
        <div className="user-bottom-informations-right">
          <Energie userId={params.userId} />
        </div>
      </div>
    </div>
  )
}

export default User
