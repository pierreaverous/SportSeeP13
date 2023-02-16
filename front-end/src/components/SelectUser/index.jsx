import { Link } from 'react-router-dom'
import './style.scss'

const selectUser = () => {
  return (
    <div>
      <p>Sélectionner l'utilisateur souhaité</p>
      <Link to="/user/12">
        <button className="button-user">USER 12</button>
      </Link>
      <Link to="/user/18">
        <button className="button-user">USER 18</button>
      </Link>
    </div>
  )
}

export default selectUser
