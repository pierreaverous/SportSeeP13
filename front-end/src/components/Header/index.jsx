import logo from '../../assets/logo.png'
import sportsee from '../../assets/sportsee.png'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="" className="logo-image" />
          <img src={sportsee} alt="" className="logo-texte" />
        </div>
      </NavLink>

      <div className="navigation">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="#">
          <li>Profil</li>
        </NavLink>
        <NavLink to="#">
          <li>Réglage</li>
        </NavLink>
        <NavLink to="#">
          <li>Communauté</li>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
