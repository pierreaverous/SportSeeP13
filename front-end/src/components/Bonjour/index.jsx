import './style.scss'
import useFetch from '../../hooks/useFetch'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {string} userId
 */

/**
 * @description Bonjour is a component that takes in prop an userId and returns datas from this userId
 * @param {PropType} userId
 * @return {object} Returns an object of datas if load data through API / if load data from
 * mocked datas file
 *
 */

const Bonjour = ({ userId }) => {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}`,
    getUserDataMockWithId()
  )

  Bonjour.propTypes = {
    /**
     * User's datas
     */
    userId: PropTypes.string.isRequired,
  }

  /**
   * @description getUserDataMockWithId is a function that find the own datas
   * from the user affected by userId
   * @return { object } Returns userData
   *
   */

  function getUserDataMockWithId() {
    const userData = USER_MAIN_DATA.find((user) => +user.id === +userId)

    return userData
  }

  /**
  * @description getData is a function that build through the class Modelisation
  * an object of datas
   
  * @returns {object} Returns datas from modelisation.formatUserName()
  */

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatUserName()
  }

  if (data !== null) {
    return (
      <div className="bonjour">
        <h1>
          Bonjour <span>{getData()}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    )
  }

  // IN CASE OF SERVER ERROR
  else {
    return <div className="error-api">ERREUR DANS LE CHARGEMENT DE L'API</div>
  }
}

export default Bonjour
