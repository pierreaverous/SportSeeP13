import './style.scss'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

import { USER_MAIN_DATA } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {string} userId
 */

/**
 * @description DiagrammeScore is a component that takes in prop an userId and returns datas from this userId
 * @param {PropType} userId
 * @return {object} Returns an object of datas if load data through API / if load data from
 * mocked datas file
 *
 */

function DiagrammeScore({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}`,
    getUserDataMockWithId()
  )

  DiagrammeScore.propTypes = {
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
   
  * @returns {object} Returns datas from modelisation.formatDataScore()
  */

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataScore()
  }

  if (data !== null) {
    return (
      <div className={`diagrammes-item diagrammes_diagramme-score`}>
        <p className="title-score">Score</p>
        <div className="objectif">
          <p className="objectif-score">{getData()}%</p>
          <p className="objectif-score-texte">de votre</p>
          <p className="objectif-score-texte">objectif</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={[
                {
                  name: 'empty-score',
                  value: 100 - getData(),
                },
                {
                  name: 'score',
                  value: getData(),
                },
              ]}
              dataKey="value"
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              cornerRadius={40}
              innerRadius={80}
              outerRadius={90}
              fill="#FF0000"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeScore
