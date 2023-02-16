import './style.scss'
import React, { Fragment } from 'react'
import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'
import PropTypes from 'prop-types'

//IMPORT IMAGES
import caloriesImg from '../../assets/calories-icon.png'
import proteinesImg from '../../assets/protein-icon.png'
import glucidesImg from '../../assets/carbs-icon.png'
import lipidesImg from '../../assets/fat-icon.png'

const calories = 'Calories'
const proteines = 'Protéines'
const glucides = 'Glucides'
const lipides = 'Lipides'

/**
 *
 * @typedef PropType
 * @property {string} userId
 */

/**
 * @description Energie is a component that takes in prop an userId and returns datas from this userId
 * @param {PropType} userId
 * @return {object} Returns an object of datas if load data through API / if load data from
 * mocked datas file
 *
 */

function Energie({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}`,
    getUserDataMockWithId()
  )

  Energie.propTypes = {
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
   
  * @returns {object} Returns datas from modelisation.formatDataEnergy()
  */

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataEnergy()
  }

  if (data !== null) {
    return (
      <Fragment>
        <div className="energie-item energie_calories">
          <img src={caloriesImg} alt={calories} />
          <div>
            {/* toLocaleString pour séparation des milliers */}
            <h3>
              {`${getData().calorieCount.toLocaleString('en-IN')}
            kCal`}
            </h3>
            <p>{calories}</p>
          </div>
        </div>
        <div className="energie-item energie_proteines">
          <img src={proteinesImg} alt={proteines} />
          <div>
            <h3>{`${getData().proteinCount}g`}</h3>
            <p>{proteines}</p>
          </div>
        </div>
        <div className="energie-item energie_glucides">
          <img src={glucidesImg} alt={glucides} />
          <div>
            <h3>{`${getData().carbohydrateCount}g`}</h3>
            <p>{glucides}</p>
          </div>
        </div>
        <div className="energie-item energie_lipides">
          <img src={lipidesImg} alt={lipides} />
          <div>
            <h3>{`${getData().lipidCount}g`}</h3>
            <p>{lipides}</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Energie
