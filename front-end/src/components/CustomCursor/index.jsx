import { Rectangle } from 'recharts'
import './style.scss'
import PropTypes from 'prop-types'

/**
 *
 * @typedef PropType
 * @property {number} payloadIndex
 * @property {number} width
 * @property {array} points
 */

/**
 * @description CustomCursor is a component that return custom design in recharts
 * @param {PropType}
 *
 */

const CustomCursor = (prop) => {
  const { payloadIndex, width, points } = prop
  //rempli le cadre complètement si hover sur premier payload pour raison esthétique
  const X = payloadIndex === 0 ? points[0].x - 20 : points[0].x
  const Y = points[0].y
  const sum = width + 50
  return (
    <Rectangle
      width={sum}
      height={350}
      x={X}
      y={Y}
      style={{
        background: 'red',
        opacity: 0.1,
      }}
    />
  )
}
CustomCursor.propTypes = {
  /**
   * CustomCursor's datas
   */
  payloadIndex: PropTypes.number,
  width: PropTypes.number,
  points: PropTypes.array,
}

export default CustomCursor
