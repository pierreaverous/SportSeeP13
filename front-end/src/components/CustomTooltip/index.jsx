import './style.scss'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {boolean} active
 * @property {array} payload
 */

/**
 * @description CustomTooltip is a component that return custom design in recharts
 * @param {PropType}
 *
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-graphique">
        <p className="Kcal">{`${payload[1].value} Kcal`}</p>
        <p className="kg">{`${payload[0].value} kg`}</p>
      </div>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  /**
   * CustomTooltip's datas
   */
  active: PropTypes.bool,
  payload: PropTypes.array,
}

export default CustomTooltip
