import './style.scss'
import { NavLink } from 'react-router-dom'

import yoga from '../../assets/yoga.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png'
import dumbbells from '../../assets/dumbbells.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-thumbs">
        <NavLink to="#">
          <img src={yoga} alt="" className="footer-thumbs-item" />
        </NavLink>
        <NavLink to="#">
          <img src={swim} alt="" className="footer-thumbs-item" />
        </NavLink>
        <NavLink to="#">
          <img src={bike} alt="" className="footer-thumbs-item" />
        </NavLink>
        <NavLink to="#">
          <img src={dumbbells} alt="" className="footer-thumbs-item" />
        </NavLink>
      </div>
      <div className="footer-copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  )
}

export default Footer
