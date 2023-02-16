import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1 className="title-404">404</h1>
      <p className="message-404">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="return-home">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
