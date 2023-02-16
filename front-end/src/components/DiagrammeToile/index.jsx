import './style.scss'

import { USER_PERFORMANCE } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {string} userId
 */

/**
 * @description DiagrammeToile is a component that takes in prop an userId and returns datas from this userId
 * @param {PropType} userId
 * @return {object} Returns an object of datas if load data through API / if load data from
 * mocked datas file
 *
 */

function DiagrammeToile({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/performance`,
    getUserDataMockWithId()
  )
  DiagrammeToile.propTypes = {
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
    const userData = USER_PERFORMANCE.find((user) => +user.userId === +userId)
    return userData
  }
  /**
  * @description getData is a function that build through the class Modelisation
  * an object of datas
   
  * @returns {object} Returns datas from modelisation.formatDataRadarChart()
  */

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataRadarChart()
  }

  if (data !== null) {
    return (
      <div className={`diagrammes-item diagrammes_diagramme-toile`}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="55%"
            data={getData()}
            fill="white"
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />

            <Radar
              name="Mike"
              dataKey="A"
              stroke="var(--red)"
              fill="var(--red)"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeToile
