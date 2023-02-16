import './style.scss'

import { USER_ACTIVITY } from '../../data/mocked-data'
import { Modelisation } from '../../data/Modelisation'
import useFetch from '../../hooks/useFetch'
import CustomTooltip from '../CustomTooltip/index'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {string} userId
 */

/**
 * @description GraphiqueBarres is a component that takes in prop an userId and returns datas from this userId
 * @param {PropType} userId
 * @return {object} Returns an object of datas if load data through API / if load data from
 * mocked datas file
 *
 */
function GraphiqueBarres({ userId }) {
  const { data, error } = useFetch(
    `http://localhost:3000/user/${userId}/activity`,
    getUserDataMockWithId()
  )

  GraphiqueBarres.propTypes = {
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
    const userData = USER_ACTIVITY.find((user) => +user.userId === +userId)
    return userData
  }

  /**
  * @description getData is a function that build through the class Modelisation
  * an object of datas
   
  * @returns {object} Returns datas from modelisation.formatDataActivity()
  */
  function getData() {
    const modelisation = new Modelisation(data)
    return modelisation.formatDataActivity()
  }

  if (data !== null) {
    return (
      <div className="graphique">
        <p className="graphique-title">Activité quotidienne</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getData()}
            barGap="10"
            margin={{
              top: 0,
              right: 60,
              left: 60,
              bottom: 0,
            }}
          >
            <Legend
              verticalAlign="top"
              align="right"
              iconSize="8"
              height={40}
              wrapperStyle={{ top: -22, right: 30 }}
            />
            <CartesianGrid vertical={false} strokeDasharray="2 2" />
            <XAxis
              dataKey="name"
              strokeWidth={0}
              padding={{ left: -30, right: -30 }}
              dy={10}
            />

            <YAxis
              yAxisId={1}
              dataKey="uv"
              orientation="right"
              type="number"
              domain={['dataMin-1', 'dataMax+1']}
              allowDecimals={false}
              tickCount={4}
              strokeWidth={0}
              dx={50}
            />
            <YAxis hide dataKey="pv" yAxisId={2} />

            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{
                outline: 'none',
              }}
              cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
            />

            <Bar
              yAxisId={1}
              dataKey="uv"
              fill="var(--dark-grey)"
              legendType="circle"
              name="Poids (kg)"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              yAxisId={2}
              dataKey="pv"
              fill="var(--red)"
              legendType="circle"
              name="Calories brûlées (kCal)"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default GraphiqueBarres
