import './style.scss'
import CustomCursor from '../CustomCursor/index'
import { USER_AVERAGE_SESSIONS } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {string} userId
 */

/**
 * @description DiagrammeCourbe is a component that takes in prop an userId and returns datas from this userId
 * @param {PropType} userId
 * @return {object} Returns an object of datas if load data through API / if load data from
 * mocked datas file
 *
 */

function DiagrammeCourbe({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`,
    getUserDataMockWithId()
  )
  DiagrammeCourbe.propTypes = {
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
    const userData = USER_AVERAGE_SESSIONS.find(
      (user) => +user.userId === +userId
    )
    return userData
  }

  /**
  * @description getData is a function that build through the class Modelisation
  * an object of datas
   
  * @returns {object} Returns datas from modelisation.formatDataSessions()
  */

  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataSessions()
  }

  if (data !== null) {
    const CustomTooltipCourbe = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip-courbe">
            <p className="kg">{`${payload[0].value} min`}</p>
          </div>
        )
      }

      return null
    }

    return (
      <div className={`diagrammes-item diagrammes_diagramme-courbe`}>
        <p className="title">
          Durée moyenne des <br />
          sessions
        </p>
        <ResponsiveContainer
          width="100%"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <LineChart
            data={getData()}
            margin={{
              top: 0,
              right: 25,
              left: 25,
              bottom: 0,
            }}
          >
            <Line
              type="natural"
              dataKey="pv"
              stroke="white"
              strokeWidth={1}
              fill="white"
              dot={false}
              activeDot={{
                stroke: 'rgba(255,255,255, 0.6)',
                strokeWidth: 8,
                r: 5,
              }}
            />

            <XAxis
              dataKey="name"
              stroke="rgba(255,255,255, 0.5)"
              strokeWidth={0}
              tick={{ fontSize: 12 }}
            />
            <YAxis hide padding={{ top: 70, bottom: 20 }} />

            <Tooltip
              content={<CustomTooltipCourbe />}
              wrapperStyle={{
                outline: 'none',
              }}
              cursor={<CustomCursor />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default DiagrammeCourbe
